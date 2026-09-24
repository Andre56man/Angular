import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { contactInfo, cvUrl, githubUrl, skills } from '../../../data/profile.data';
import { GithubProjects } from '../../../shared/services/github-projects';

type LineKind = 'cmd' | 'out' | 'accent' | 'err' | 'profile';

interface Line {
  kind: LineKind;
  text: string;
}

const SECTIONS: Record<string, string> = {
  accueil: 'home',
  about: 'about',
  services: 'service',
  projets: 'portfolio',
  parcours: 'resume',
  blog: 'blog',
  contact: 'contact',
};

const COMMANDS = ['help', 'whoami', 'skills', 'projets', 'github', 'contact', 'cv', 'cd', 'clear'];

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class Terminal {
  private readonly github = inject(GithubProjects);
  private readonly body = viewChild.required<ElementRef<HTMLElement>>('body');
  private readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  lines = signal<Line[]>([
    { kind: 'cmd', text: 'cat profil.json' },
    { kind: 'profile', text: '' },
    { kind: 'out', text: "Tapez 'help' pour explorer le portfolio depuis ce terminal." },
  ]);
  input = signal('');

  private history: string[] = [];
  private cursor = 0;

  focus() {
    this.field().nativeElement.focus({ preventScroll: true });
  }

  onKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        this.run(this.input());
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.browse(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.browse(1);
        break;
      case 'Tab': {
        event.preventDefault();
        const match = COMMANDS.find(c => c.startsWith(this.input().trim()));
        if (match && this.input().trim()) this.input.set(match + ' ');
        break;
      }
    }
  }

  private browse(step: number) {
    if (!this.history.length) return;
    this.cursor = Math.min(Math.max(this.cursor + step, 0), this.history.length);
    this.input.set(this.history[this.cursor] ?? '');
  }

  private run(raw: string) {
    const value = raw.trim();
    this.input.set('');
    if (value) {
      this.history.push(value);
    }
    this.cursor = this.history.length;

    const [command, ...args] = value.toLowerCase().split(/\s+/);
    if (command === 'clear') {
      this.lines.set([]);
      return;
    }

    const output = value ? this.execute(command, args) : [];
    this.lines.update(lines => [...lines, { kind: 'cmd', text: value }, ...output]);
    setTimeout(() => {
      const el = this.body().nativeElement;
      el.scrollTop = el.scrollHeight;
    });
  }

  private execute(command: string, args: string[]): Line[] {
    const out = (text: string): Line => ({ kind: 'out', text });
    const accent = (text: string): Line => ({ kind: 'accent', text });

    switch (command) {
      case 'help':
        return [
          accent('Commandes disponibles :'),
          out('  whoami        qui suis-je'),
          out('  skills        mes compétences techniques'),
          out('  projets       mes projets et leur dépôt'),
          out('  github        ouvrir mon profil GitHub'),
          out('  contact       me joindre'),
          out('  cv            télécharger mon CV'),
          out('  cd <section>  aller à une section (' + Object.keys(SECTIONS).join(', ') + ')'),
          out('  clear         effacer le terminal'),
        ];
      case 'whoami':
        return [
          out('Kodjo André — développeur fullstack, licencié en génie logiciel.'),
          out('Stage de 4 mois chez ATG (05/2026 — 09/2026).'),
          out('Web · mobile · backend · machine learning.'),
        ];
      case 'skills':
      case 'competences':
        return skills.map(s => out(`${s.group.padEnd(18)} ${s.items.join(', ')}`));
      case 'projets':
      case 'projects':
        return [
          ...this.github.projects().map((p, i) => out(`${String(i + 1).padStart(2)}. ${p.title.padEnd(24)} ${p.repo?.replace('https://', '') ?? '(code non publié)'}`)),
          accent("→ 'cd projets' pour les voir"),
        ];
      case 'github':
        window.open(githubUrl, '_blank', 'noopener');
        return [accent(`Ouverture de ${githubUrl.replace('https://', '')}…`)];
      case 'contact':
        return [out(`email      ${contactInfo.email}`), out(`téléphone  ${contactInfo.phone}`), out(`lieu       ${contactInfo.location}`)];
      case 'cv': {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Kodjo-Andre-CV.pdf';
        link.click();
        return [accent('Téléchargement de cv.pdf…')];
      }
      case 'cd': {
        const id = SECTIONS[args[0] ?? ''];
        if (!id) return [{ kind: 'err', text: `cd: section inconnue '${args[0] ?? ''}'` }];
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        return [accent(`→ ~/${args[0]}`)];
      }
      case 'sudo':
        return [{ kind: 'err', text: 'Permission refusée : bien essayé.' }];
      default:
        return [{ kind: 'err', text: `commande introuvable : ${command}. Tapez 'help'.` }];
    }
  }
}
