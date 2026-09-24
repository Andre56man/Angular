import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../shared/components';
import { Reveal } from '../../../shared/directives';
import { cvUrl } from '../../../data/profile.data';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly cvUrl = cvUrl;
  readonly focus = ['Développement web', 'Applications mobiles', 'APIs & bases de données', 'Machine learning'];
}
