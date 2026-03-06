export type PlatformType = 'LINKEDIN' | 'TWITTER' | 'GITHUB' | 'INSTAGRAM' | 'FACEBOOK' | 'YOUTUBE' | 'PORTFOLIO' | 'OTHER';

export interface iReseauSocial {
  id?: number;
  user?: number;
  nom_plateforme: PlatformType;
  lien: string;
  created_at?: string;
  updated_at?: string;
}
