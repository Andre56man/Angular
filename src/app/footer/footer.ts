import { Component } from '@angular/core';
import { SocialLinks } from '../shared/components';

@Component({
  selector: 'app-footer',
  imports: [SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();
}
