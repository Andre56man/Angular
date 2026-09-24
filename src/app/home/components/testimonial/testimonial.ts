import { Component } from '@angular/core';
import { Reveal } from '../../../shared/directives';

@Component({
  selector: 'app-testimonial',
  imports: [Reveal],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class Testimonial {
  readonly testimonials = [
    {
      quote: "Kodjo est un développeur passionné et rigoureux. Son engagement envers la qualité du code et l'innovation est remarquable.",
      author: 'Mentor académique',
      role: 'Institut Ivoirien de Technologie',
    },
    {
      quote: "Excellent travail sur les projets mobiles. Kodjo a démontré une maîtrise impressionnante de Flutter et une grande capacité d'apprentissage.",
      author: 'Professeur',
      role: 'Développement mobile',
    },
  ];
}
