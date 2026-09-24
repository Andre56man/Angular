import { Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { SocialLinks } from '../../../shared/components';
import { Terminal } from '../terminal/terminal';
import { GithubProjects } from '../../../shared/services/github-projects';

@Component({
  selector: 'app-introduction',
  imports: [SocialLinks, Terminal],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {
  readonly roles = ['Développeur Fullstack', 'Développeur Mobile', 'Développeur Backend', 'Ingénieur Logiciel'];
  private readonly github = inject(GithubProjects);
  readonly stats = computed(() => [
    { value: 'Licence', label: 'génie logiciel' },
    { value: '4 mois', label: 'stage fullstack · ATG' },
    { value: String(this.github.projects().length), label: 'projets' },
    { value: '3', label: 'certifications' },
  ]);

  typed = signal(this.roles[0]);

  constructor() {
    const destroyRef = inject(DestroyRef);
    // L'animation ne tourne que dans le navigateur (pas pendant le rendu serveur)
    afterNextRender(() => {
      let role = 0;
      let chars = this.roles[0].length;
      let deleting = true;
      let timer: ReturnType<typeof setTimeout>;

      const tick = () => {
        const word = this.roles[role];
        chars += deleting ? -1 : 1;
        this.typed.set(word.slice(0, chars));

        let delay = deleting ? 35 : 70;
        if (!deleting && chars === word.length) {
          deleting = true;
          delay = 2200;
        } else if (deleting && chars === 0) {
          deleting = false;
          role = (role + 1) % this.roles.length;
          delay = 300;
        }
        timer = setTimeout(tick, delay);
      };

      timer = setTimeout(tick, 2200);
      destroyRef.onDestroy(() => clearTimeout(timer));
    });
  }

  // Position du curseur pour le halo lumineux de la grille
  track(event: PointerEvent) {
    const hero = event.currentTarget as HTMLElement;
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--x', `${event.clientX - rect.left}px`);
    hero.style.setProperty('--y', `${event.clientY - rect.top}px`);
  }
}
