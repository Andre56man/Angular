import { Component, afterNextRender, signal } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class Preloader {
  loaded = signal(false);

  constructor() {
    // Masque le preloader une fois le rendu navigateur terminé (jamais côté serveur)
    afterNextRender(() => {
      setTimeout(() => this.loaded.set(true), 400);
    });
  }
}
