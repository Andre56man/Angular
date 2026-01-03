/**
 * Modèle pour les services
 */
export interface Service {
  icon: string; // Classe d'icône (ex: "mbri-database")
  title: string;
  description: string;
}

export interface ServicesSection {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}


