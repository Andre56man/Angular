import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeader } from '../../../models';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description?: string = '';
}

