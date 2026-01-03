/**
 * Modèle pour la section Vidéo
 */
export interface VideoSection {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string; // URL YouTube, Vimeo, etc.
  thumbnailImageUrl?: string;
  buttonText?: string;
}


