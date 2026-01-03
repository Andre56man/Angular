/**
 * Modèle pour les articles de blog
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  author: string;
  date: string; // Format: "2024-01-15"
  category?: string;
  tags?: string[];
  link?: string;
}

export interface BlogSection {
  title: string;
  subtitle: string;
  description: string;
  posts: BlogPost[];
}


