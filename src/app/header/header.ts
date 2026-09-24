import { Component, DestroyRef, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { cvUrl } from '../data/profile.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly links = [
    { href: '#about', label: 'à-propos' },
    { href: '#service', label: 'services' },
    { href: '#portfolio', label: 'projets' },
    { href: '#resume', label: 'parcours' },
    { href: '#blog', label: 'blog' },
    { href: '#contact', label: 'contact' },
  ];

  readonly cvUrl = cvUrl;

  menuOpen = signal(false);
  scrolled = signal(false);
  progress = signal(0);
  active = signal('');

  constructor() {
    const destroyRef = inject(DestroyRef);
    // Surligne dans le menu la section actuellement à l'écran
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) return;
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set('#' + entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.links) {
        const section = document.querySelector(link.href);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? window.scrollY / max : 0);
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
