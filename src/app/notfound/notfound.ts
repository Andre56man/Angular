import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink, Header, Footer],
  templateUrl: './notfound.html',
  styleUrl: './notfound.scss',
})
export class Notfound {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
