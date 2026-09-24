import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styles: `
    :host {
      display: flex;
      gap: 10px;
    }
  `,
})
export class SocialLinks {}
