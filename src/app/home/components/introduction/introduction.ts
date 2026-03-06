import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction implements OnInit {
  roles = [
    'Développeur Web',
    'Développeur Mobile',
    'Développeur Backend',
    'Ingénieur Logiciel'
  ];
  currentRole = signal(this.roles[0]);
  private roleIndex = 0;

  ngOnInit() {
    this.startTypingAnimation();
  }

  private startTypingAnimation() {
    setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole.set(this.roles[this.roleIndex]);
    }, 3000);
  }
}
