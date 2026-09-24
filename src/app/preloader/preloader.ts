import { Component, afterNextRender, signal } from '@angular/core';

// Durée minimale d'affichage, le temps que la barre de progression se remplisse
const MIN_DISPLAY_MS = 1300;

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class Preloader {
  loaded = signal(false);

  constructor() {
    // Masque le preloader côté navigateur uniquement (jamais pendant le rendu serveur)
    afterNextRender(() => {
      const elapsed = performance.now();
      setTimeout(() => this.loaded.set(true), Math.max(0, MIN_DISPLAY_MS - elapsed));
    });
  }
}
