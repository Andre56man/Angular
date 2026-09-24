import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionHeaderComponent, SocialLinks } from '../../../shared/components';
import { Reveal } from '../../../shared/directives';
import { contactInfo } from '../../../data/profile.data';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, SectionHeaderComponent, SocialLinks, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly info = contactInfo;

  readonly form = { name: '', email: '', subject: '', message: '' };
  sent = signal(false);

  // Ouvre le client mail de l'utilisateur avec le message pré-rempli
  submit() {
    const { name, email, subject, message } = this.form;
    const body = `${message}\n\n— ${name} (${email})`;
    const url = `mailto:${this.info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    this.sent.set(true);
  }
}
