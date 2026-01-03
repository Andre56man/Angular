/**
 * Modèle pour la section Contact
 */
export interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  icon: string; // Classe d'icône (ex: "mbri-letter")
  label: string;
  value: string;
  link?: string; // mailto: ou tel: ou URL
}

export interface ContactSection {
  title: string;
  subtitle: string;
  description: string;
  contactInfos: ContactInfo[];
  formAction?: string; // URL pour le formulaire
}


