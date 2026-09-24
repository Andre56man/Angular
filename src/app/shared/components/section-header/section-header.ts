import { Component, input } from '@angular/core';
import { Reveal } from '../../directives';

@Component({
  selector: 'app-section-header',
  imports: [Reveal],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {
  readonly index = input('');
  readonly title = input('');
  readonly comment = input('');
}
