import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Incline légèrement la carte en 3D en suivant la souris
 * et expose la position du curseur (--mx / --my) pour le halo lumineux.
 */
@Directive({
  selector: '[appTilt]',
  host: {
    '(pointermove)': 'move($event)',
    '(pointerleave)': 'reset()',
  },
})
export class Tilt {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private reducedMotion?: boolean;

  move(event: PointerEvent) {
    if (event.pointerType !== 'mouse') return;
    this.reducedMotion ??= window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rect = this.el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    this.el.style.setProperty('--mx', `${x * 100}%`);
    this.el.style.setProperty('--my', `${y * 100}%`);
    if (!this.reducedMotion) {
      this.el.style.transform =
        `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-3px)`;
    }
  }

  reset() {
    this.el.style.transform = '';
  }
}
