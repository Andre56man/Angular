/**
 * Contenu du portfolio partagé entre plusieurs sections (Parcours, Projets, terminal de l'accueil).
 * Pour ajouter une compétence ou un projet, il suffit de modifier ce fichier.
 *
 * Les projets sont synchronisés en direct avec GitHub (voir shared/services/github-projects.ts) :
 * les entrées ci-dessous servent de valeurs par défaut et de textes rédigés à la main,
 * qui restent prioritaires sur les informations venant de GitHub.
 */

export interface SkillGroup {
  group: string;
  items: string[];
}

export type ProjectKind = 'web' | 'mobile' | 'backend' | 'lab' | 'conception';

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  kinds: ProjectKind[];
  /** Langage principal affiché sur la vignette générée (si pas d'image) */
  language?: string;
  image?: string;
  repo?: string;
  demo?: string;
  /** Renseignés automatiquement depuis GitHub */
  stars?: number;
  updatedAt?: string;
}

export const skills: SkillGroup[] = [
  { group: 'langages', items: ['Python', 'JavaScript', 'Dart', 'C#', 'HTML5 / CSS3'] },
  { group: 'frameworks', items: ['Angular', 'Django', 'Flutter','Flask', 'Bootstrap'] },
  { group: 'données & réseau', items: ['PostgreSQL', 'GNS3'] },
  { group: 'autres', items: ['Arduino', 'Photoshop'] },
];

export const projects: Project[] = [
  {
    title: 'Djokoshop',
    category: 'E-commerce · Django',
    description: 'Boutique en ligne inspirée de Zara et Nike : catalogue par catégorie, recherche, panier, commandes et espace vendeur.',
    tags: ['Python', 'Django', 'SMTP', 'Render'],
    kinds: ['web', 'backend'],
    language: 'Python',
    repo: 'https://github.com/Andre56man/Djokoshop',
    demo: 'https://djokoshop.vercel.app',
  },
  {
    title: 'WebAfrica',
    category: 'Plateforme de webinaires',
    description: "Solution d'organisation et de diffusion de webinaires pensée pour le contexte africain, avec frontend et backend séparés.",
    tags: ['JavaScript', 'Frontend', 'Backend'],
    kinds: ['web', 'backend'],
    language: 'JavaScript',
    repo: 'https://github.com/Andre56man/WebAfrica',
  },
  {
    title: 'FESTIVOIRE',
    category: 'Billetterie mobile',
    description: "Application Flutter de vente de tickets d'événements en ligne, multiplateforme, avec intégration continue Codemagic.",
    tags: ['Flutter', 'Dart', 'Codemagic CI'],
    kinds: ['mobile'],
    language: 'Dart',
    repo: 'https://github.com/Andre56man/FESTIVOIRE',
  },
  {
    title: 'Gba-ivoire',
    category: 'Covoiturage',
    description: 'Application web de covoiturage mettant en relation conducteurs et passagers.',
    tags: ['TypeScript', 'Tailwind CSS'],
    kinds: ['web'],
    language: 'TypeScript',
    repo: 'https://github.com/Andre56man/Gba-ivoire',
  },
  {
    title: 'Odoo IT Asset',
    category: 'Module ERP Odoo',
    description: "Module Odoo de gestion d'un parc informatique, livré avec sa documentation.",
    tags: ['Odoo', 'Python', 'ERP'],
    kinds: ['backend'],
    language: 'Python',
    repo: 'https://github.com/Andre56man/Odoo-IT-asset',
  },
  {
    title: 'E-Parents',
    category: 'Suivi scolaire',
    description: "Système de suivi scolaire permettant aux parents de suivre la scolarité de leurs enfants, de l'analyse à la conception.",
    tags: ['Analyse & conception', 'HTML'],
    kinds: ['conception', 'web'],
    language: 'HTML',
    repo: 'https://github.com/Andre56man/E-Parents',
  },
  {
    title: 'Portfolio Angular',
    category: 'Ce site',
    description: 'Portfolio développé avec Angular 21 et rendu côté serveur, avec terminal interactif et animations.',
    tags: ['Angular', 'TypeScript', 'SSR'],
    kinds: ['web'],
    language: 'TypeScript',
    repo: 'https://github.com/Andre56man/Angular',
    demo: 'https://portfoliokodjo.vercel.app',
  },
  {
    title: 'Portfolio Django',
    category: 'Portfolio · Django',
    description: 'Portfolio dynamique en Django avec un modèle de projets administrable.',
    tags: ['Python', 'Django'],
    kinds: ['web', 'backend'],
    language: 'Python',
    repo: 'https://github.com/Andre56man/Portfolio',
    demo: 'https://portfolio-Kodjo.com',
  },
  {
    title: 'Portfolio React',
    category: 'Portfolio · React',
    description: 'Première version de mon portfolio, développée avec React et TypeScript.',
    tags: ['React', 'TypeScript'],
    kinds: ['web'],
    language: 'TypeScript',
    repo: 'https://github.com/Andre56man/myportfolio',
    demo: 'https://portfolio-dun-nine-qfywqs7rqx.vercel.app',
  },
  {
    title: 'IIT School',
    category: 'Site vitrine',
    description: "Site vitrine pour l'Institut Ivoirien de Technologie.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    kinds: ['web'],
    language: 'JavaScript',
    repo: 'https://github.com/Andre56man/IIT-SCHOOL',
  },
  {
    title: 'Projet IIT',
    category: 'Prototype & modélisation',
    description: 'Prototype Figma et diagrammes de conception (séquence, cas d’utilisation) pour un projet de l’IIT.',
    tags: ['Figma', 'UML'],
    kinds: ['conception'],
    language: 'Figma',
    repo: 'https://github.com/Andre56man/Projet-pour-IIT-',
  },
  {
    title: 'Java G2',
    category: 'Projet de groupe',
    description: 'Projet Java réalisé en groupe, avec maquette et modélisation UML.',
    tags: ['Java', 'UML'],
    kinds: ['conception'],
    language: 'Java',
    repo: 'https://github.com/Andre56man/Java-G2',
  },
  {
    title: 'Cantine G2',
    category: 'Projet de groupe',
    description: "Projet de gestion de la cantine de l'école, réalisé en groupe.",
    tags: ['Projet académique'],
    kinds: ['conception'],
    repo: 'https://github.com/Andre56man/CantineG2',
  },
  {
    title: 'Karma Shop',
    category: 'E-commerce',
    image: '/assets/images/karma.png',
    description: 'Site e-commerce académique intégrant un blog et les fonctionnalités de vente en ligne.',
    tags: ['Web', 'E-commerce', 'Responsive'],
    kinds: ['web'],
  },
  {
    title: "Système d'accès Arduino",
    category: 'Systèmes embarqués',
    image: '/assets/images/arduino.png',
    description: "Contrôle d'accès sécurisé par badge, réalisé dans le cadre d'une initiation à la robotique.",
    tags: ['Arduino', 'Robotique'],
    kinds: ['lab'],
  },
  {
    title: 'Algorithme de Machine Learning',
    category: 'Data & IA',
    image: '/assets/images/algo.png',
    description: "Algorithme optimisé pour une stratégie d'investissement boursier, développé en Python.",
    tags: ['Python', 'Machine Learning', 'Finance'],
    kinds: ['lab', 'backend'],
  },
];

export const contactInfo = {
  email: 'kodjoandre56@gmail.com',
  phone: '+225 07 03 25 54 71',
  phoneHref: 'tel:+2250703255471',
  location: "Grand-Bassam, Côte d'Ivoire",
};

export const githubUser = 'Andre56man';
export const githubUrl = `https://github.com/${githubUser}`;

/**
 * Dépôts GitHub à ne jamais afficher sur le site (les forks et dépôts vides sont déjà ignorés).
 * Tout autre dépôt public apparaît automatiquement dans la section Projets.
 */
export const hiddenRepos = ['Anely', 'Birthday', 'testfinal', 'precommit', 'Etab_V1', 'Estate'];

export const cvUrl = '/assets/Kodjo André cv .pdf';
