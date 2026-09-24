import { Injectable, signal } from '@angular/core';
import { Project, ProjectKind, githubUser, hiddenRepos, projects } from '../../data/profile.data';

interface GithubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  size: number;
  stargazers_count: number;
  pushed_at: string;
}

type SyncStatus = 'local' | 'loading' | 'live' | 'error';

const CACHE_KEY = 'github-repos';
const CACHE_TTL = 10 * 60 * 1000;

/**
 * Synchronise la liste des projets avec les dépôts publics GitHub, directement depuis le navigateur :
 * un nouveau dépôt ou une modification sur GitHub apparaît sans redéployer le site.
 * Les textes rédigés dans profile.data.ts restent prioritaires ; en cas d'échec, la liste locale est conservée.
 */
@Injectable({ providedIn: 'root' })
export class GithubProjects {
  readonly projects = signal<Project[]>(projects);
  readonly status = signal<SyncStatus>('local');
  readonly syncedAt = signal<Date | null>(null);

  private started = false;

  /** À n'appeler que dans le navigateur (afterNextRender) */
  load() {
    if (this.started) return;
    this.started = true;
    this.status.set('loading');

    this.fetchRepos()
      .then(repos => {
        this.projects.set(merge(repos));
        this.status.set('live');
        this.syncedAt.set(new Date());
      })
      .catch(() => this.status.set('error'));
  }

  private async fetchRepos(): Promise<GithubRepo[]> {
    const cached = readCache();
    if (cached) return cached;

    const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=pushed`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) throw new Error(`GitHub ${response.status}`);

    // On ne garde que les champs utiles (la réponse complète est volumineuse)
    const repos = ((await response.json()) as GithubRepo[]).map(r => ({
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      language: r.language,
      homepage: r.homepage,
      topics: r.topics,
      fork: r.fork,
      archived: r.archived,
      size: r.size,
      stargazers_count: r.stargazers_count,
      pushed_at: r.pushed_at,
    }));
    writeCache(repos);
    return repos;
  }
}

function merge(repos: GithubRepo[]): Project[] {
  const curated = new Map(
    projects.filter(p => p.repo).map(p => [p.repo!.toLowerCase(), p]),
  );
  const hidden = new Set(hiddenRepos.map(name => name.toLowerCase()));

  const live = repos
    .filter(r => !r.fork && !r.archived && r.size > 0 && !hidden.has(r.name.toLowerCase()))
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
    .map(repo => {
      const base = curated.get(repo.html_url.toLowerCase());
      const language = base?.language ?? repo.language ?? undefined;
      const topics = repo.topics ?? [];
      return {
        title: base?.title ?? prettify(repo.name),
        category: base?.category ?? language ?? 'Projet',
        description: base?.description ?? repo.description ?? 'Projet publié sur GitHub.',
        tags: base?.tags ?? [language, ...topics].filter((t): t is string => !!t).slice(0, 4),
        kinds: base?.kinds ?? inferKinds(language, topics),
        language,
        image: base?.image,
        repo: repo.html_url,
        demo: base?.demo ?? (repo.homepage || undefined),
        stars: repo.stargazers_count,
        updatedAt: repo.pushed_at,
      } satisfies Project;
    });

  // Les projets sans dépôt (Arduino, ML…) restent affichés à la suite
  return [...live, ...projects.filter(p => !p.repo)];
}

function prettify(name: string) {
  return name.replace(/[-_]+/g, ' ').trim();
}

function inferKinds(language: string | undefined, topics: string[]): ProjectKind[] {
  const has = (...names: string[]) => topics.some(t => names.includes(t.toLowerCase()));
  const kinds = new Set<ProjectKind>();

  if (has('mobile', 'flutter', 'android', 'ios') || language === 'Dart' || language === 'Kotlin' || language === 'Swift') {
    kinds.add('mobile');
  }
  if (has('backend', 'api', 'django', 'flask', 'odoo', 'nodejs') || ['Python', 'Java', 'PHP', 'C#', 'Go'].includes(language ?? '')) {
    kinds.add('backend');
  }
  if (has('ml', 'ai', 'ia', 'iot', 'arduino', 'machine-learning', 'data')) {
    kinds.add('lab');
  }
  if (has('uml', 'conception', 'figma')) {
    kinds.add('conception');
  }
  if (has('web', 'frontend') || ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Vue'].includes(language ?? '') || !kinds.size) {
    kinds.add('web');
  }
  return [...kinds];
}

// Petit cache de session pour ne pas rappeler l'API à chaque rechargement (limite de 60 requêtes/heure)
function readCache(): GithubRepo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw);
    return Date.now() - at < CACHE_TTL ? repos : null;
  } catch {
    return null;
  }
}

function writeCache(repos: GithubRepo[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    // stockage indisponible (navigation privée…) : on s'en passe
  }
}
