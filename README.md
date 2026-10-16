# Améthyste Thérapies

Site vitrine du cabinet de Stéphanie Morier, thérapeute EMDR, hypnose et TCC à Salon-de-Provence.
Il reprend la maquette `Amethyste-Design.pen` et la spécification SEO & GEO qui l'accompagne.

## Technologies

| Rôle       | Outil                                                                                                 |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build) 7 (pages statiques, `ClientRouter` pour la navigation sans rechargement) |
| Style      | [Tailwind CSS](https://tailwindcss.com) v4 (variables dans `src/styles/global.css`)                   |
| Animations | [GSAP](https://gsap.com) + ScrollTrigger                                                              |
| Icônes     | [Lucide](https://lucide.dev) (`@lucide/astro`)                                                        |
| Polices    | Lora et Nunito Sans, hébergées sur le site (`@fontsource-variable`)                                   |
| Formulaire | Astro Actions + [Resend](https://resend.com)                                                          |
| Serveur    | `@astrojs/node` (mode `standalone`)                                                                   |

## Démarrage

Prérequis : Node.js 22.22 ou plus récent.

```sh
npm install
cp .env.example .env     # puis renseignez les variables (voir plus bas)
npm run dev              # http://localhost:4321
```

| Commande          | Action                         |
| :---------------- | :----------------------------- |
| `npm run dev`     | Serveur de développement       |
| `npm run build`   | Construit le site dans `dist/` |
| `npm run preview` | Prévisualise la construction   |

## Variables d'environnement

Elles sont déclarées dans `astro.config.mjs` et lues côté serveur uniquement. Le fichier `.env` n'est pas versionné.

| Variable             | Rôle                                           |
| :------------------- | :--------------------------------------------- |
| `ENVIRONNEMENT`      | `dev` (par défaut) ou `production`             |
| `RESEND_API_KEY`     | Clé API Resend                                 |
| `CONTACT_TO_EMAIL`   | Adresse qui reçoit les messages du formulaire  |
| `CONTACT_FROM_EMAIL` | Expéditeur, sur un domaine vérifié dans Resend |

### Formulaire de contact

Le formulaire appelle l'action `contact` (`src/actions/index.ts`), qui valide les champs, puis envoie un e-mail HTML (`src/emails/contact.ts`) via Resend.

- **`ENVIRONNEMENT=dev`** : l'e-mail part vers `delivered+contact@resend.dev` (adresse de test de Resend), avec l'objet préfixé `[TEST]`. Aucun vrai message n'est envoyé. L'envoi est visible dans l'onglet « Emails » du tableau de bord Resend.
- **`ENVIRONNEMENT=production`** : l'e-mail part vers `CONTACT_TO_EMAIL`. Si `CONTACT_FROM_EMAIL` contient encore `resend.dev`, l'envoi est refusé.
- Un champ caché (`website`) sert de piège à robots. Le consentement RGPD est obligatoire.

## Structure

```text
public/
  images/            logo.webp, picture.webp
  icon.ico           icône de l'onglet
  robots.txt         autorise les robots IA (GPTBot, ClaudeBot, PerplexityBot…)
  llms.txt           résumé du site pour les moteurs IA
src/
  actions/           action « contact » (Resend)
  components/        Header, Footer, Breadcrumb, CtaFinal, ChatWidget, MapEmbed, Icon
  data/
    site.ts          coordonnées, navigation, FAQ, avis, tarifs, JSON-LD du cabinet
    approches.ts     contenu des 13 pages d'approche
    chat.ts          symptômes et correspondances du chat d'orientation
  emails/            modèle d'e-mail du formulaire
  layouts/Layout.astro   <head> (SEO, Open Graph, JSON-LD), ClientRouter
  pages/             une route par fichier
  scripts/           animations.ts (GSAP), chat.ts
  styles/global.css  thème Tailwind (couleurs, polices)
```

## Modifier le contenu

- **Coordonnées, FAQ, avis, tarifs, navigation** : `src/data/site.ts`. C'est ici que se trouve l'URL Resalib (`SITE.resalib`).
- **Pages d'approche** : un bloc par approche dans `src/data/approches.ts`. Le gabarit `src/pages/approches/[slug].astro` génère la page, son sommaire, sa FAQ et son balisage. Pour ajouter une approche, ajoutez un bloc : la page, la page `/approches`, le footer et le plan du site se mettent à jour.
- **Chat d'orientation** : symptômes et approches proposées dans `src/data/chat.ts`. Les recherches contenant des mots liés au suicide affichent toujours l'écran avec le 3114 et le 15.
- **Couleurs et polices** : `@theme` dans `src/styles/global.css`.

## Pages

`/`, `/approches`, `/approches/<slug>` (13 pages), `/qui-suis-je`, `/tarifs`, `/avis`, `/contact`, `/mentions-legales`, `/confidentialite`, `/plan-du-site`. Le sitemap est généré automatiquement.

## Choix particuliers

- **Animations** : respectent `prefers-reduced-motion`. Les scripts sont relancés à chaque navigation (`astro:page-load`) et nettoyés avant (`astro:before-swap`).
- **Carte Google Maps** : ne se charge qu'après un clic d'acceptation, mémorisé dans le navigateur (`MapEmbed.astro`).
- **Chat** : aucune donnée personnelle collectée, tout se fait par boutons.
- **Pas de statistiques ni de cookies publicitaires.** Si vous en ajoutez, mettez à jour `/confidentialite` et ajoutez un bandeau de consentement.

## Déploiement

Le site se construit avec l'adaptateur Node (`mode: 'standalone'`), car l'action du formulaire a besoin d'un serveur.

```sh
npm run build
node ./dist/server/entry.mjs
```

Définissez `ENVIRONNEMENT=production` et les variables de la section précédente chez l'hébergeur. Pour un autre hébergeur (Vercel, Netlify, Cloudflare), remplacez l'adaptateur dans `astro.config.mjs`.

## À compléter avant la mise en ligne

- **Mentions légales** : forme juridique, SIRET, hébergeur (champs en surbrillance dans `src/pages/mentions-legales.astro`).
- **Resalib** : vérifier l'URL du profil (`SITE.resalib`).
- **Contenus des approches** : brouillons à faire valider par Stéphanie (`src/data/approches.ts`). Seule la page EMDR s'appuie sur ses textes.
- **Formations** : organismes et années (page `/qui-suis-je`).
- **Logo** : fournir une version plus grande ou en SVG (`public/images/logo.webp` ne mesure que 149 × 34 px).
- **Photos** : l'image du hero de l'accueil est une photo libre Unsplash à remplacer.
- **Avis** : 12 avis sur 27 sont affichés. Ajouter les autres et leurs étiquettes de filtre.
- **Resend** : vérifier le domaine `amethyste-therapies.fr` et renseigner `CONTACT_FROM_EMAIL`.
- **Facebook** : le lien du footer pointe vers `facebook.com`, à remplacer par la vraie page.
- **Fichiers du modèle Astro** : `public/favicon.ico` et `public/favicon.svg` peuvent être supprimés.
