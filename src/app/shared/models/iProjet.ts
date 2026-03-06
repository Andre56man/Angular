export interface iProject {
  id?: number;
  user?: number;
  titre: string;
  resume: string;
  image?: string | null;
  lien?: string | null;
  created_at?: string;
  updated_at?: string;
}
