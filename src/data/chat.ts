import { SITE } from './site';

export type ApproachKey = 'emdr' | 'hypno' | 'tcc' | 'icv' | 'acp' | 'pnl' | 'eft' | 'sophro' | 'psycho' | 'couple';

export const APPROACH_INFO: Record<ApproachKey, { name: string; desc: string; href: string }> = {
  emdr: { name: 'EMDR · NMO', desc: 'Retraiter les souvenirs traumatiques pour qu\'ils perdent leur charge émotionnelle.', href: '/approches/emdr' },
  hypno: { name: 'Hypnothérapie', desc: 'Accéder à vos ressources pour changer durablement.', href: '/approches/hypnotherapie' },
  tcc: { name: 'TCC', desc: 'Identifier les pensées qui entretiennent la souffrance et les transformer pas à pas.', href: '/approches/tcc' },
  icv: { name: 'ICV', desc: 'Intégration du Cycle de la Vie, pour les traumas précoces et le deuil.', href: '/approches/icv' },
  acp: { name: 'Approche centrée sur la personne', desc: 'Un espace d\'écoute pour comprendre ce qui se joue dans la relation.', href: '/approches/acp' },
  pnl: { name: 'PNL & coaching', desc: 'Mieux communiquer, poser ses limites, sortir des schémas répétitifs.', href: '/approches/pnl-coaching' },
  eft: { name: 'EFT', desc: 'Apaiser le stress et les émotions grâce à la technique de libération émotionnelle.', href: '/approches/eft' },
  sophro: { name: 'Sophrologie', desc: 'Retrouver le calme par la respiration et la relaxation.', href: '/approches/relaxologie-sophrologie' },
  psycho: { name: 'Psychotraumatologie', desc: 'Comprendre et soigner les effets du trauma.', href: '/approches/psychotraumatologie' },
  couple: { name: 'Thérapie de couple ou familiale', desc: 'Des séances à deux ou en famille, au cabinet ou en visio.', href: '/tarifs' },
};

export interface Theme {
  title: string;
  symptoms: string[];
  approaches: ApproachKey[];
  intro: string;
}

export const THEMES: Theme[] = [
  {
    title: 'Humeur & émotions',
    symptoms: ['Dépression', 'Tristesse persistante', 'Perte de motivation', 'Sautes d\'humeur', 'Deuil', 'Colère', 'Culpabilité', 'Idées noires'],
    approaches: ['tcc', 'hypno', 'icv'],
    intro: 'pour ce que vous traversez sur le plan émotionnel',
  },
  {
    title: 'Anxiété & stress',
    symptoms: ['Anxiété', 'Angoisses', 'Crises de panique', 'Stress chronique', 'Phobies', 'Pensées obsédantes', 'Peur du regard des autres'],
    approaches: ['hypno', 'tcc', 'eft', 'sophro'],
    intro: 'pour l\'anxiété et le stress',
  },
  {
    title: 'Traumatismes',
    symptoms: ['Traumatisme', 'Accident', 'Agression', 'Violences subies', 'Cauchemars', 'Flashbacks', 'Stress post-traumatique'],
    approaches: ['emdr', 'icv', 'psycho'],
    intro: 'pour un traumatisme',
  },
  {
    title: 'Relations & famille',
    symptoms: ['Relation compliquée', 'Conflits de couple', 'Séparation', 'Difficultés familiales', 'Jalousie', 'Dépendance affective', 'Difficulté à communiquer'],
    approaches: ['acp', 'pnl', 'couple'],
    intro: 'pour des difficultés dans une relation',
  },
  {
    title: 'Travail & études',
    symptoms: ['Burn-out', 'Épuisement', 'Stress au travail', 'Harcèlement', 'Difficultés scolaires', 'Reconversion'],
    approaches: ['tcc', 'pnl', 'sophro'],
    intro: 'pour des difficultés au travail ou dans les études',
  },
  {
    title: 'Corps & habitudes',
    symptoms: ['Insomnie', 'Troubles du sommeil', 'Tabac', 'Alcool', 'Troubles alimentaires', 'Douleurs psychosomatiques', 'Troubles sexuels'],
    approaches: ['hypno', 'tcc', 'eft'],
    intro: 'pour le corps et les habitudes',
  },
  {
    title: 'Enfants & ados',
    symptoms: ['Anxiété de l\'enfant', 'Phobie scolaire', 'Colères de l\'enfant', 'Harcèlement scolaire', 'Manque de confiance'],
    approaches: ['hypno', 'emdr', 'tcc'],
    intro: 'pour votre enfant ou adolescent (dès 3 ans)',
  },
  {
    title: 'Confiance en soi',
    symptoms: ['Estime de soi', 'Confiance en soi', 'Prise de parole', 'Gestion des émotions', 'Prendre une décision'],
    approaches: ['pnl', 'acp', 'eft'],
    intro: 'pour la confiance en soi',
  },
];

export const OVERRIDES: Record<string, { approaches: ApproachKey[]; intro?: string }> = {
  Deuil: { approaches: ['icv', 'tcc', 'hypno'], intro: 'pour traverser un deuil' },
};

export const SENSITIVE = ['Idées noires'];
export const SENSITIVE_PATTERN = /(suicid|mourir|me tuer|en finir|me faire du mal|idees noires|disparaitre)/;

export const SYNONYMS: Record<string, string> = {
  deprime: 'Dépression',
  depressif: 'Dépression',
  couple: 'Conflits de couple',
  divorce: 'Séparation',
  angoisse: 'Angoisses',
  panique: 'Crises de panique',
  burnout: 'Burn-out',
  insomnies: 'Insomnie',
  dormir: 'Troubles du sommeil',
  fumer: 'Tabac',
  cigarette: 'Tabac',
  peur: 'Phobies',
  timide: 'Peur du regard des autres',
  confiance: 'Confiance en soi',
};

export const CHAT = {
  phone: SITE.phone,
  phoneTel: SITE.phoneTel,
  resalib: SITE.resalib,
};
