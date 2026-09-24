import { Component, afterNextRender, computed, inject, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components';
import { Reveal, Tilt } from '../../../shared/directives';
import { GithubProjects } from '../../../shared/services/github-projects';
import { ProjectKind, githubUrl } from '../../../data/profile.data';

type Filter = ProjectKind | 'all';

// Couleurs des langages, reprises de GitHub
const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#663399',
  SCSS: '#c6538c',
  Java: '#b07219',
  Figma: '#a259ff',
};

const PREVIEW_COUNT = 6;
const relativeTime = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });

@Component({
  selector: 'app-portfolio',
  imports: [SectionHeaderComponent, Reveal, Tilt],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private readonly github = inject(GithubProjects);

  readonly githubUrl = githubUrl;
  readonly status = this.github.status;
  readonly filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'tous' },
    { key: 'web', label: 'web' },
    { key: 'mobile', label: 'mobile' },
    { key: 'backend', label: 'backend' },
    { key: 'lab', label: 'ia & iot' },
    { key: 'conception', label: 'conception' },
  ];

  filter = signal<Filter>('all');
  expanded = signal(false);
  // Active l'animation d'entrée des cartes seulement après une interaction
  animate = signal(false);

  readonly matching = computed(() => {
    const filter = this.filter();
    const all = this.github.projects();
    return filter === 'all' ? all : all.filter(p => p.kinds.includes(filter));
  });

  readonly visible = computed(() =>
    this.expanded() ? this.matching() : this.matching().slice(0, PREVIEW_COUNT),
  );

  constructor() {
    afterNextRender(() => this.github.load());
  }

  count(key: Filter) {
    const all = this.github.projects();
    return key === 'all' ? all.length : all.filter(p => p.kinds.includes(key)).length;
  }

  select(key: Filter) {
    this.animate.set(true);
    this.filter.set(key);
  }

  toggle() {
    this.animate.set(true);
    this.expanded.update(v => !v);
  }

  color(language?: string) {
    return (language && LANGUAGE_COLORS[language]) || 'var(--text-3)';
  }

  repoName(repo: string) {
    return repo.replace('https://github.com/', '');
  }

  // "mis à jour il y a 3 jours"
  updated(date: string) {
    const seconds = (new Date(date).getTime() - Date.now()) / 1000;
    const units: [Intl.RelativeTimeFormatUnit, number][] = [
      ['year', 31536000],
      ['month', 2592000],
      ['day', 86400],
      ['hour', 3600],
      ['minute', 60],
    ];
    for (const [unit, size] of units) {
      if (Math.abs(seconds) >= size) return relativeTime.format(Math.round(seconds / size), unit);
    }
    return "à l'instant";
  }
}
