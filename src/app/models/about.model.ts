/**
 * Modèle pour les informations personnelles de la section About
 */
export interface AboutInfo {
  fullName: string;
  age: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  website?: string;
  description: string;
  skills?: string[];
}

export interface About {
  title: string;
  subtitle: string;
  description: string;
  info: AboutInfo;
}

