import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components';
import { Reveal, Tilt } from '../../../shared/directives';

@Component({
  selector: 'app-service',
  imports: [SectionHeaderComponent, Reveal, Tilt],
  templateUrl: './service.html',
  styleUrl: './service.scss',
})
export class Service {
  readonly services = [
    {
      file: 'web.ts',
      title: 'Développement Web',
      description: 'Sites et applications web modernes, réactifs et accessibles, construits avec des frameworks frontend éprouvés.',
      stack: ['Angular', 'React', 'Vue.js', 'HTML5/CSS3'],
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    },
    {
      file: 'mobile.dart',
      title: 'Développement Mobile',
      description: 'Applications multiplateformes iOS et Android avec Flutter, performantes et fidèles au design.',
      stack: ['Flutter', 'Dart', 'iOS', 'Android'],
      icon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01',
    },
    {
      file: 'backend.py',
      title: 'Backend & Données',
      description: 'APIs robustes, modélisation de bases de données et solutions e-commerce sécurisées.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
    },
  ];
}
