import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss',
})
export class Preloader implements OnInit {
  loaded = false;

  ngOnInit() {
    // Attendre que la page soit complètement chargée
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loaded = true;
      }, 500);
    });
  }
}
