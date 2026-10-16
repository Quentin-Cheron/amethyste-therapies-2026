export interface ContactEmailData {
  nom: string;
  tel?: string;
  email: string;
  sujet: string;
  message?: string;
  siteName: string;
  siteUrl: string;
  test?: boolean;
}

const COLORS = {
  bg: '#FBFAF7',
  surface: '#FFFFFF',
  ink: '#18232D',
  inkSoft: '#52606C',
  line: '#E6E8EA',
  primary: '#46B5EC',
  primaryStrong: '#187BB3',
  primaryText: '#1673A8',
  primarySoft: '#EAF6FD',
  accent: '#B35C2A',
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Segoe UI', Helvetica, Arial, sans-serif";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const telHref = (tel: string) => tel.replace(/[^\d+]/g, '');

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:14px 0;border-bottom:1px solid ${COLORS.line};font-family:${SANS};font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${COLORS.inkSoft};width:120px;vertical-align:top;">${label}</td>
    <td style="padding:14px 0;border-bottom:1px solid ${COLORS.line};font-family:${SANS};font-size:16px;color:${COLORS.ink};vertical-align:top;">${value}</td>
  </tr>`;

export function renderContactEmail(data: ContactEmailData) {
  const nom = escapeHtml(data.nom);
  const email = escapeHtml(data.email);
  const sujet = escapeHtml(data.sujet);
  const tel = data.tel ? escapeHtml(data.tel) : '';
  const message = data.message ? escapeHtml(data.message).replace(/\r?\n/g, '<br />') : '';

  const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin:0;padding:0;background:${COLORS.bg};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${nom} vous écrit pour : ${sujet}.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.bg};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
            <tr>
              <td style="padding:0 8px 20px;font-family:${SERIF};font-size:22px;color:${COLORS.ink};">
                ${escapeHtml(data.siteName)}
              </td>
            </tr>
            <tr>
              <td style="background:${COLORS.surface};border:1px solid ${COLORS.line};border-radius:12px;overflow:hidden;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background:${COLORS.primarySoft};padding:32px 36px;">
                      ${data.test ? `<p style="margin:0 0 12px;font-family:${SANS};font-size:12px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:${COLORS.accent};">Message de test</p>` : ''}
                      <p style="margin:0 0 8px;font-family:${SANS};font-size:12px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;color:${COLORS.primaryText};">Nouvelle demande</p>
                      <h1 style="margin:0;font-family:${SERIF};font-size:28px;line-height:1.2;font-weight:normal;color:${COLORS.ink};">${nom} souhaite vous contacter</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 36px 8px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        ${row('Consultation', `<span style="display:inline-block;background:${COLORS.primarySoft};color:${COLORS.primaryText};border-radius:6px;padding:4px 12px;font-size:14px;font-weight:600;">${sujet}</span>`)}
                        ${row('E-mail', `<a href="mailto:${email}" style="color:${COLORS.primaryText};text-decoration:none;">${email}</a>`)}
                        ${tel ? row('Téléphone', `<a href="tel:${telHref(data.tel!)}" style="color:${COLORS.primaryText};text-decoration:none;">${tel}</a>`) : ''}
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:20px 36px 36px;">
                      <p style="margin:0 0 10px;font-family:${SANS};font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:${COLORS.inkSoft};">Message</p>
                      <div style="border-left:3px solid ${COLORS.primary};background:${COLORS.bg};padding:16px 20px;border-radius:0 8px 8px 0;font-family:${SANS};font-size:16px;line-height:1.6;color:${COLORS.ink};">
                        ${message || `<span style="color:${COLORS.inkSoft};font-style:italic;">Pas de message.</span>`}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `${data.test ? '[TEST] ' : ''}Nouvelle demande de contact`,
    '',
    `Nom : ${data.nom}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.tel || 'non renseigné'}`,
    `Consultation pour : ${data.sujet}`,
    '',
    data.message || '(pas de message)',
  ].join('\n');

  return { html, text };
}
