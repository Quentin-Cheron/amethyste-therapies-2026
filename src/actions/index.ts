import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, ENVIRONNEMENT, RESEND_API_KEY } from 'astro:env/server';
import { Resend } from 'resend';
import { SITE } from '../data/site';
import { renderContactEmail } from '../emails/contact';

const SUJETS = ['Moi', 'Mon enfant', 'Mon couple', 'Ma famille'] as const;

// Adresses de test Resend : aucun vrai e-mail n'est envoyé, l'envoi apparaît dans le tableau de bord.
const DEV_FROM = 'Améthyste Thérapies <onboarding@resend.dev>';
const DEV_TO = 'delivered+contact@resend.dev';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      nom: z.string().trim().min(2, 'Indiquez votre nom').max(100),
      tel: z.string().trim().max(30).optional(),
      email: z.email('Adresse e-mail invalide').max(200),
      sujet: z.enum(SUJETS),
      message: z.string().trim().max(2000, 'Message trop long (2000 caractères maximum)').optional(),
      consent: z.boolean().refine((v) => v, 'Votre accord est nécessaire pour être recontacté'),
      website: z.string().optional(),
    }),
    handler: async (input) => {
      if (input.website) return { sent: true };

      if (!RESEND_API_KEY) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "L'envoi de messages n'est pas configuré pour le moment.",
        });
      }

      const isProd = ENVIRONNEMENT === 'production';
      if (isProd && CONTACT_FROM_EMAIL.includes('resend.dev')) {
        console.error('ENVIRONNEMENT=production avec une adresse resend.dev : configurez CONTACT_FROM_EMAIL avec votre domaine vérifié.');
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "L'envoi de messages n'est pas configuré pour le moment.",
        });
      }

      const { html, text } = renderContactEmail({
        nom: input.nom,
        tel: input.tel,
        email: input.email,
        sujet: input.sujet,
        message: input.message,
        siteName: SITE.name,
        siteUrl: SITE.url,
        test: !isProd,
      });

      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: isProd ? CONTACT_FROM_EMAIL : DEV_FROM,
        to: [isProd ? CONTACT_TO_EMAIL : DEV_TO],
        replyTo: input.email,
        subject: `${isProd ? '' : '[TEST] '}Demande de contact — ${input.sujet} — ${input.nom}`.replace(/[\r\n]+/g, ' '),
        html,
        text,
      });

      if (error) {
        console.error('Resend error', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "Le message n'a pas pu être envoyé. Merci d'appeler le cabinet.",
        });
      }

      return { sent: true };
    },
  }),
};
