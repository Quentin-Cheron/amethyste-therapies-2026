export const SITE = {
  name: 'Améthyste Thérapies',
  owner: 'Stéphanie Morier',
  url: 'https://amethyste-therapies.fr',
  phone: '06 27 34 66 30',
  phoneTel: '+33627346630',
  email: 'amethyste.therapies@gmail.com',
  resalib: 'https://www.resalib.fr/praticien/43834',
  street: '248 avenue de Wertheim',
  streetShort: '248 av. de Wertheim',
  postalCode: '13300',
  city: 'Salon-de-Provence',
  place: 'Centre Médical du Vert Bocage',
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=248+avenue+de+Wertheim+13300+Salon-de-Provence',
  reviewCount: 27,
} as const;

export const NAV = [
  { label: 'Approches', href: '/approches' },
  { label: 'Qui suis-je ?', href: '/qui-suis-je' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Avis', href: '/avis' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_CABINET = [
  { label: 'Qui suis-je ?', href: '/qui-suis-je' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Avis patients', href: '/avis' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FAQ = [
  {
    q: "Qu'est-ce que l'EMDR et pour qui est-ce indiqué ?",
    a: "L'EMDR (Eye Movement Desensitization and Reprocessing) est une thérapie par mouvements oculaires qui aide le cerveau à retraiter des souvenirs traumatiques. Elle est indiquée pour le stress post-traumatique, les phobies, l'anxiété et les blessures émotionnelles anciennes. Au cabinet, elle est pratiquée dans sa version NMO EMDR+.",
  },
  {
    q: 'Combien de séances faut-il prévoir ?',
    a: "Cela dépend de la nature et de l'ancienneté de la difficulté. Les thérapies brèves visent des résultats en un nombre limité de séances : un événement isolé peut se traiter en quelques séances, des difficultés plus anciennes demandent un suivi plus long. Nous faisons le point ensemble à chaque étape.",
  },
  {
    q: 'Recevez-vous les enfants et les adolescents ?',
    a: "Oui. Je reçois les enfants dès 3 ans, les adolescents, les adultes, les couples et les familles. Les séances sont adaptées à l'âge, et les tarifs enfants et adolescents sont spécifiques.",
  },
  {
    q: 'Combien coûte une séance à Salon-de-Provence ?',
    a: "Une première consultation adulte (55 min) coûte 65 €, puis 80 € la séance de suivi (1h15). Pour les enfants : 55 € puis 70 €. Le coaching est à 75 € puis 100 € (1h30). Les tarifs étudiants, adolescents, couples, familles et à domicile sont détaillés sur la page Tarifs.",
  },
  {
    q: 'Les séances sont-elles possibles en visio ou à domicile ?',
    a: "Oui. Les rendez-vous ont lieu au cabinet, en téléconsultation où que vous soyez, ou à domicile pour les enfants, adolescents, étudiants et adultes. Le tarif est le même au cabinet ou en visio.",
  },
  {
    q: 'Où se trouve le cabinet ?',
    a: 'Le cabinet est situé au Centre Médical du Vert Bocage, 248 avenue de Wertheim, 13300 Salon-de-Provence. Un parking gratuit est disponible sur place.',
  },
] as const;

export const APPROACHES_FEATURED = [
  {
    tag: 'EMDR · NMO',
    icon: 'eye',
    title: 'Neurothérapie par mouvements oculaires',
    desc: "Retraiter les souvenirs traumatiques pour qu'ils perdent leur charge émotionnelle. Indiquée pour le stress post-traumatique, les phobies et les blessures anciennes.",
    href: '/approches/emdr',
  },
  {
    tag: 'Hypnose',
    icon: 'moon',
    title: 'Hypnothérapie clinique cognitive & comportementale',
    desc: 'Un état de concentration naturel pour accéder à vos ressources et modifier durablement des schémas : anxiété, sommeil, addictions, confiance.',
    href: '/approches/hypnotherapie',
  },
  {
    tag: 'TCC',
    icon: 'brain',
    title: 'Thérapies cognitivo-comportementales',
    desc: 'Identifier les pensées et comportements qui entretiennent la souffrance, puis les transformer pas à pas avec des exercices concrets.',
    href: '/approches/tcc',
  },
] as const;

export const APPROACHES_OTHER = [
  { abbr: 'ICV', name: 'Intégration du Cycle de la Vie', href: '/approches/icv' },
  { abbr: 'ACP', name: 'Approche centrée sur la personne', href: '/approches/acp' },
  { abbr: 'PNL', name: 'Programmation neuro-linguistique & coaching', href: '/approches/pnl-coaching' },
  { abbr: 'Relaxo', name: 'Relaxologie & sophrologie', href: '/approches/relaxologie-sophrologie' },
  { abbr: 'EFT', name: 'Technique de libération émotionnelle', href: '/approches/eft' },
  { abbr: 'Psycho', name: 'Psychotraumatologie', href: '/approches/psychotraumatologie' },
  { abbr: 'Cogni', name: 'Psychologie cognitive', href: '/approches/psychologie-cognitive' },
  { abbr: 'NMO', name: 'NMO EMDR+ · Neurothérapie par mouvements oculaires', href: '/approches/nmo-emdr-plus' },
  { abbr: 'PCC', name: 'Psychothérapie cognitive comportementale', href: '/approches/psychotherapie-cognitive-comportementale' },
  { abbr: 'Coach', name: 'Coaching personnel et professionnel', href: '/approches/coaching-personnel-professionnel' },
] as const;

export const TROUBLES = [
  'Anxiété, angoisses & crises de panique',
  'Traumatismes & stress post-traumatique',
  "Dépression & troubles de l'humeur",
  'Burn-out & épuisement',
  'Sommeil & douleurs psychosomatiques',
  'Phobies, addictions & troubles alimentaires',
] as const;

export const TARIFS_TABLE = [
  { public: 'Enfants', first: '55 € · 45 min', follow: '70 € · 55 min' },
  { public: 'Adultes', first: '65 € · 55 min', follow: '80 € · 1h15' },
  { public: 'Coaching vie / pro', first: '75 € · 1h30', follow: '100 € · 1h30' },
  { public: 'Adolescents' },
  { public: 'Étudiants' },
  { public: 'Couple · Famille' },
  { public: 'À domicile' },
] as const;

export const REVIEWS = [
  { q: "Sortie d'un début de dépression en quelques séances.", name: 'Aurélie Richard', src: 'Salon-de-Provence', big: true, tags: ['Dépression'] },
  { q: "L'accompagnement est tout simplement bluffant.", name: 'Sarah Fayolle', src: 'Salon-de-Provence', tags: [] },
  { q: "M'a beaucoup aidée lors d'un grand traumatisme émotionnel.", name: 'Charlène D.', src: 'Montélimar', tags: ['Traumatisme'] },
  { q: 'Professionnelle, à l\'écoute, qui a su trouver les bons mots.', name: 'Nicolas A.', src: 'Montélimar', tags: [] },
  { q: 'Thérapeute d\'une part très qualifiée, de l\'autre très à l\'écoute.', name: 'Victoria V.', src: 'Montélimar', tags: [] },
  { q: 'Très à l\'écoute. Quelques séances ont suffi à débloquer.', name: 'Isabelle L.', src: 'Montélimar', big: true, tags: [] },
  { q: 'Vraiment époustouflée par les résultats.', name: 'Mimi 58', src: 'Salon-de-Provence', tags: [] },
  { q: 'Excellente thérapeute, à l\'écoute des patients.', name: 'Marylène V.', src: 'Salon-de-Provence', tags: [] },
  { q: 'Guérie beaucoup plus vite que prévu.', name: 'Naïs', src: 'Psychologue.net', tags: [] },
  { q: 'Très sérieux, grandes compétences, résultats rapides.', name: 'Chantal S.', src: 'Médoucine', tags: [] },
  { q: 'Thérapeute expérimentée et très humaine.', name: 'Marion Z.', src: 'Montélimar', big: true, tags: [] },
  { q: "L'aide apportée est indiscutable.", name: 'Nicolas P.', src: 'Médoucine', tags: [] },
] as { q: string; name: string; src: string; big?: boolean; tags: string[] }[];

export const REVIEW_SOURCES = [
  ['Cabinet de Montélimar', 11],
  ['Cabinet de Salon-de-Provence', 7],
  ['Psychologue.net', 4],
  ['Médoucine', 3],
  ['Therapeutes.com', 2],
] as const;

export function jsonLdBase() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#cabinet`,
    name: SITE.name,
    url: SITE.url,
    description:
      'Thérapies brèves : EMDR, hypnose, TCC, ICV, PNL, EFT pour enfants dès 3 ans, adolescents, adultes, couples et familles.',
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: '55 € – 100 €',
    image: `${SITE.url}/images/picture.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      postalCode: SITE.postalCode,
      addressCountry: 'FR',
    },
    areaServed: 'Salon-de-Provence et alentours',
    founder: {
      '@type': 'Person',
      name: SITE.owner,
      jobTitle: 'Praticienne EMDR, hypnothérapeute',
      knowsAbout: ['EMDR', 'Hypnose', 'TCC', 'ICV', 'PNL', 'EFT'],
    },
    sameAs: [SITE.resalib],
  };
}
