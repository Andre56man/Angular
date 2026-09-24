import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/**
 * Fait apparaître l'élément en fondu quand il entre dans l'écran.
 * `appReveal="120"` ajoute un délai (ms) pour échelonner les éléments d'une même grille.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  readonly delay = input(0, { alias: 'appReveal', transform: (v: unknown) => numberAttribute(v, 0) });

  constructor() {
    const el: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      // Déjà visible au chargement, ou animations désactivées : on n'y touche pas
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!('IntersectionObserver' in window)) return;

      el.style.setProperty('--reveal-delay', `${this.delay()}ms`);
      el.classList.add('reveal');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          el.classList.add('revealed');
          observer.disconnect();
          // Retire les classes une fois l'animation finie pour rendre la main aux transitions de survol
          el.addEventListener('transitionend', () => el.classList.remove('reveal', 'revealed'), { once: true });
        },
        { threshold: 0.12 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
