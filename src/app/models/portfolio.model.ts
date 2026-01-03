/**
 * Modèle pour les projets du portfolio
 */
export type PortfolioItemType = 'image' | 'video' | 'iframe';
export type PortfolioCategory = string; // Ex: "frontenddevelopment", "backenddevelopment"

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  type: PortfolioItemType;
  link?: string; // URL pour image/video/iframe
  icon?: string; // Classe d'icône (ex: "mbri-photos")
  description?: string;
}

export interface PortfolioSection {
  title: string;
  subtitle: string;
  description: string;
  items: PortfolioItem[];
}


