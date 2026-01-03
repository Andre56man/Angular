/**
 * Modèle pour les témoignages
 */
export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorImageUrl: string;
}

export interface TestimonialSection {
  backgroundImageUrl: string;
  testimonials: Testimonial[];
}


