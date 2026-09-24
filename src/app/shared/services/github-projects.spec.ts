import { TestBed } from '@angular/core/testing';
import { GithubProjects } from './github-projects';

const repo = (overrides: Record<string, unknown>) => ({
  description: null,
  language: null,
  homepage: null,
  topics: [],
  fork: false,
  archived: false,
  size: 10,
  stargazers_count: 0,
  pushed_at: '2026-01-01T00:00:00Z',
  ...overrides,
});

describe('GithubProjects', () => {
  let service: GithubProjects;

  beforeEach(() => {
    sessionStorage.clear();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        repo({ name: 'Djokoshop', html_url: 'https://github.com/Andre56man/Djokoshop', description: 'site ecommerce', stargazers_count: 3 }),
        repo({ name: 'nouveau-projet', html_url: 'https://github.com/Andre56man/nouveau-projet', description: 'Une API', language: 'Python', pushed_at: '2026-09-01T00:00:00Z' }),
        repo({ name: 'public-apis', html_url: 'https://github.com/Andre56man/public-apis', fork: true }),
        repo({ name: 'Anely', html_url: 'https://github.com/Andre56man/Anely' }),
        repo({ name: 'vide', html_url: 'https://github.com/Andre56man/vide', size: 0 }),
      ],
    }));
    service = TestBed.inject(GithubProjects);
  });

  afterEach(() => vi.unstubAllGlobals());

  it('fusionne les dépôts GitHub avec les projets rédigés', async () => {
    service.load();
    await vi.waitFor(() => expect(service.status()).toBe('live'));

    const titles = service.projects().map(p => p.title);
    // Le plus récent en premier, forks / masqués / vides exclus, projets sans dépôt conservés à la fin
    expect(titles[0]).toBe('nouveau projet');
    expect(titles).toContain('Djokoshop');
    expect(titles).not.toContain('public-apis');
    expect(titles).not.toContain('Anely');
    expect(titles).not.toContain('vide');
    expect(titles.at(-1)).toBe('Algorithme de Machine Learning');

    const djoko = service.projects().find(p => p.title === 'Djokoshop')!;
    expect(djoko.description).toContain('Zara'); // texte rédigé prioritaire
    expect(djoko.stars).toBe(3);

    const fresh = service.projects()[0];
    expect(fresh.description).toBe('Une API');
    expect(fresh.kinds).toContain('backend');
  });

  it('garde la liste locale si GitHub est indisponible', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 403 }));
    const before = service.projects();
    service.load();
    await vi.waitFor(() => expect(service.status()).toBe('error'));
    expect(service.projects()).toBe(before);
  });
});
