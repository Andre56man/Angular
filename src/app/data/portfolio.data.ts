/**
 * Données exemple pour le portfolio
 * Modifiez ces données pour personnaliser votre portfolio
 */
import {
  Introduction,
  About,
  ServicesSection,
  PortfolioSection,
  ResumeSection,
  TestimonialSection,
  ContactSection,
  BlogSection,
  VideoSection
} from '../models';

export const introductionData: Introduction = {
  welcomeText: "Bienvenue, je suis",
  roles: ["Développeur Web", "Développeur Mobile", "Développeur Backend", "Ingénieur Logiciel"],
  name: "Kodjo André",
  backgroundImageUrl: "/assets/images/hero-bg.jpg",
  buttonText: "En Savoir Plus",
  buttonLink: "#about"
};

export const aboutData: About = {
  title: "Qui suis-je?",
  subtitle: "À propos de moi",
  description: "Découvrez mon profil",
  info: {
    fullName: "KODJO KOUA ANDRÉ JEAN-WILFRIED",
    age: "21 ans",
    experience: "En formation",
    location: "Grand-Bassam, Côte d'Ivoire",
    email: "kodjoandre56@gmail.com",
    phone: "+225 0703255471",
    website: "https://portfolio-kodjo.vercel.app/",
    description: "Informaticien passionné par le développement et l'innovation, je souhaite mettre à profit mes compétences en génie logiciel pour concevoir des solutions informatiques performantes et adaptées aux besoins des utilisateurs. Curieux et rigoureux, je m'investis pleinement dans chaque projet afin d'assurer sa réussite. Expert en développement logiciel, mobile et web utilisant des technologies professionnelles.",
    skills: ["HTML5/CSS3", "Bootstrap", "Python/Django", "Dart/Flutter", "JavaScript", "C#", "Backend Development", "Mobile Development", "Design Graphique (Photoshop)", "Robotique (Arduino)", "GNS3"]
  }
};

export const servicesData: ServicesSection = {
  title: "Ce que je fais",
  subtitle: "Services",
  description: "Je propose une gamme complète de services en développement logiciel et web",
  services: [
    {
      icon: "mbri-code",
      title: "Développement Web",
      description: "Création de sites web modernes et réactifs utilisant HTML5, CSS3, Bootstrap et frameworks frontend avancés."
    },
    {
      icon: "mbri-tablet",
      title: "Développement Mobile",
      description: "Applications mobiles multiplateformes avec Flutter/Dart pour iOS et Android avec performance optimale."
    },
    {
      icon: "mbri-database",
      title: "Backend & Bases de Données",
      description: "Développement backend robuste avec Python/Django et création de solutions e-commerce sécurisées et fonctionnelles."
    }
  ]
};

export const portfolioData: PortfolioSection = {
  title: "Mes Projets",
  subtitle: "Portfolio",
  description: "Découvrez les projets que j'ai réalisés",
  items: [
    {
      id: "1",
      title: "Site E-commerce",
      category: "frontenddevelopment",
      imageUrl: "/assets/images/ecommerce.jpg",
      type: "image",
      link: "/assets/images/ecommerce.jpg",
      icon: "mbri-photos",
      description: "Site e-commerce académique intégrant blog et fonctionnalités de vente en ligne avec technologies web modernes."
    },
    
    {
      id: "3",
      title: "Système d'Accès Arduino",
      category: "robotique",
      imageUrl: "/assets/images/arduino.jpg",
      type: "image",
      link: "/assets/images/arduino.jpg",
      icon: "mbri-mobile",
      description: "Système sécurisé d'accès utilisant un badge d'accès développé avec Arduino dans le cadre d'une initiation à la robotique."
    },
    {
      id: "4",
      title: "Algorithme Machine Learning",
      category: "backenddevelopment",
      imageUrl: "/assets/images/ml-algorithm.jpg",
      type: "image",
      link: "/assets/images/ml-algorithm.jpg",
      icon: "mbri-code",
      description: "Création d'un algorithme optimisé pour une stratégie d'investissement boursier améliorée utilisant Python."
    }
  ]
};

export const resumeData: ResumeSection = {
  title: "Mon Parcours",
  subtitle: "CV - Résumé",
  description: "Mon expérience académique et professionnelle",
  education: [
    {
      title: "Licence 3 - Génie Logiciel",
      institution: "Institut Ivoirien de Technologie",
      period: "01/2025 - 09/2025",
      description: "En cours de formation en programmation avancée et développement logiciel professionnel."
    },
    {
      title: "Licence 2 - Développement Logiciel",
      institution: "Institut Ivoirien de Technologie",
      period: "09/2023 - 07/2025",
      description: "Expert en développement logiciel, mobile et web. Maîtrise du frontend (HTML5, CSS3, Bootstrap) et backend (Python/Django, Dart/Flutter). Technologies de scraping web et e-commerce."
    },
    {
      title: "Licence 1 - Programmation",
      institution: "Institut Ivoirien de Technologie",
      period: "10/2023 - 06/2024",
      description: "Fondamentaux de programmation orientée objet avec C#, Dart et Flutter, interfaces réactives en HTML/CSS/JS."
    },
    {
      title: "Baccalauréat Scientifique - Série D",
      institution: "lycée Robert Léon",
      period: "10/2022 - 07/2023",
      description: "Diplôme de baccalauréat scientifique avec excellentes bases en mathématiques et sciences."
    }
  ],
  experience: [
    {
      title: "Développeur Fullstack",
      company: "Projets Académiques & Personnels",
      period: "2023 - Présent",
      description: "Développement de sites web dynamiques, applications mobiles et systèmes e-commerce avec technologies modernes."
    },
    {
      title: "Développeur Machine Learning",
      company: "Projets Académiques",
      period: "2024",
      description: "Création d'algorithmes d'investissement boursier optimisés utilisant Python et techniques d'apprentissage automatique."
    }
  ],
  skills: [
    { name: "HTML5/CSS3", level: 90 },
    { name: "Bootstrap", level: 35 },
    { name: "JavaScript", level: 80 },
    { name: "Python/Django", level: 85 },
    { name: "Dart/Flutter", level: 80 },
    { name: "C#", level: 75 },
    { name: "Backend Development", level: 85 },
    { name: "Design Graphique (Photoshop)", level: 70 },
    { name: "Robotique/Arduino", level: 75 },
    { name: "GNS3 (Infrastructure Réseau)", level: 40 }
  ]
};

export const testimonialData: TestimonialSection = {
  backgroundImageUrl: "/assets/images/testimonial-bg.jpg",
  testimonials: [
    {
      id: "1",
      quote: "Kodjo est un développeur passionné et rigoureux. Son engagement envers la qualité du code et l'innovation est remarquable.",
      authorName: "Mentor Académique",
      authorRole: "Institut Ivoirien de Technologie",
      authorImageUrl: "/assets/images/mentor-avatar.jpg"
    },
    {
      id: "2",
      quote: "Excellent travail sur les projets mobiles. Kodjo a démontré une maîtrise impressionnante de Flutter et une grande capacité d'apprentissage.",
      authorName: "Professeur",
      authorRole: "Développement Mobile",
      authorImageUrl: "/assets/images/prof-avatar.jpg"
    }
  ]
};

export const contactData: ContactSection = {
  title: "Entrez en Contact",
  subtitle: "Me Contacter",
  description: "N'hésitez pas à me contacter pour discuter de nouveaux projets ou collaborations",
  contactInfos: [
    {
      type: "email",
      icon: "mbri-letter",
      label: "Envoyer un Email",
      value: "kodjoandre56@gmail.com",
      link: "mailto:kodjoandre56@gmail.com"
    },
    {
      type: "phone",
      icon: "mbri-mobile",
      label: "Appeler",
      value: "+225 0703255471",
      link: "tel:+2250703255471"
    },
    {
      type: "location",
      icon: "mbri-pin",
      label: "Localisation",
      value: "Grand-Bassam, Côte d'Ivoire",
      link: undefined
    }
  ]
};

export const blogData: BlogSection = {
  title: "Actualités Récentes",
  subtitle: "Blog",
  description: "Découvrez mes derniers articles et réflexions",
  posts: [
    {
      id: "1",
      title: "Les Tendances du Développement Fullstack en 2025",
      excerpt: "Explorez les dernières technologies et frameworks qui définissent le développement web moderne.",
      imageUrl: "https://via.placeholder.com/800x600",
      author: "Kodjo André",
      date: "2025-03-05",
      category: "Développement Web",
      tags: ["Angular", "TypeScript", "Fullstack"],
      link: "#"
    },
    {
      id: "2",
      title: "Guide Complet Flutter pour Applications Mobiles",
      excerpt: "Apprenez comment créer des applications mobiles performantes et multiplateformes avec Flutter.",
      imageUrl: "https://via.placeholder.com/800x600",
      author: "Kodjo André",
      date: "2025-02-20",
      category: "Développement Mobile",
      tags: ["Flutter", "Dart", "Mobile"],
      link: "#"
    }
  ]
};

export const videoData: VideoSection = {
  title: "Mes Vidéos",
  subtitle: "Vidéos",
  description: "Découvrez mes derniers projets vidéos et tutoriels",
  videoUrl: "https://www.youtube.com/watch?v=oC1m-dTFX6g",
  thumbnailImageUrl: "https://via.placeholder.com/1920x1080",
  buttonText: "Regarder Vidéo"
};


