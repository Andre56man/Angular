import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components';
import { Reveal, Tilt } from '../../../shared/directives';

@Component({
  selector: 'app-blog',
  imports: [SectionHeaderComponent, Reveal, Tilt],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  readonly posts = [
    {
      date: '2025-03-05',
      title: 'Les tendances du développement fullstack en 2025',
      excerpt: 'Les technologies et pratiques qui façonnent le développement fullstack moderne.',
      image: '/assets/images/image.png',
      tag: 'fullstack',
    },
    {
      date: '2025-02-20',
      title: 'Guide complet Flutter pour applications mobiles',
      excerpt: 'Construire des applications mobiles performantes avec Flutter et Dart.',
      image: '/assets/images/flutter.jpg',
      tag: 'mobile',
    },
    {
      date: '2025-01-10',
      title: 'Architecture backend moderne avec Python',
      excerpt: 'Concevoir des architectures backend robustes et évolutives avec Python et Django.',
      image: '/assets/images/python.png',
      tag: 'backend',
    },
  ];
}
