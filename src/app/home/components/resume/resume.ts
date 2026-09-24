import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components';
import { Reveal } from '../../../shared/directives';
import { skills } from '../../../data/profile.data';

interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  imports: [SectionHeaderComponent, Reveal],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  readonly experience: TimelineEntry[] = [
    {
      period: '05/2026 — 09/2026',
      title: 'Développeur Fullstack — Stage',
      place: 'ATG · 4 mois',
      description: "Stage en tant que développeur fullstack : développement frontend et backend d'applications, en équipe.",
    },
    {
      period: "2023 — aujourd'hui",
      title: 'Développeur Fullstack',
      place: 'Projets académiques & personnels',
      description: 'Sites web dynamiques, applications mobiles et systèmes e-commerce.',
    },
    {
      period: '2024',
      title: 'Développeur Machine Learning',
      place: 'Projets académiques',
      description: "Algorithmes d'investissement boursier optimisés en Python.",
    },
  ];

  readonly education: TimelineEntry[] = [
    {
      period: '01/2025 — 09/2025',
      title: 'Licence en Génie Logiciel — diplômé',
      place: 'Institut Ivoirien de Technologie',
      description: 'Diplôme de licence obtenu : programmation avancée et développement logiciel professionnel.',
    },
    {
      period: '09/2023 — 07/2025',
      title: 'Licence 2 — Développement Logiciel',
      place: 'Institut Ivoirien de Technologie',
      description: 'Frontend (HTML5, CSS3, Bootstrap), backend (Python/Django, Dart/Flutter), e-commerce et scraping web.',
    },
    {
      period: '10/2023 — 06/2024',
      title: 'Licence 1 — Programmation',
      place: 'Institut Ivoirien de Technologie',
      description: 'Programmation orientée objet avec C#, Dart et Flutter.',
    },
    {
      period: '10/2022 — 07/2023',
      title: 'Baccalauréat scientifique — Série D',
      place: 'Lycée Robert Léon',
      description: 'Solides bases en mathématiques et en sciences.',
    },
  ];

  readonly certifications = [
    { year: '2025', title: 'Data Africa Hub — Data Tour', detail: '8ᵉ au classement national (équipe Kaizen 5)' },
    { year: '2025', title: 'HCIA-openEuler v1.0', detail: "Système d'exploitation openEuler — Huawei" },
    { year: '2025', title: 'Impression 3D & IA', detail: "Impression 3D assistée par des outils d'IA" },
  ];

  readonly skills = skills;
}
