import { iProject } from './iProjet';
import { iExperience } from './iExperience';
import { iService } from './iService';
import { iPrisedecontact } from './iPrisedecontact';
import { iReseauSocial } from './iReseauSocial';
import { iLocation } from './iLocation';

export interface iUser {
  id?: number;
  nom: string;
  prenom: string;
  photo_profil?: string | null;
  description?: string | null;
  age?: number | null;
  email: string;
  lien_cv?: string | null;
  telephone?: string | null;
  projects?: iProject[];
  experiences?: iExperience[];
  services?: iService[];
  contacts?: iPrisedecontact[];
  social_medias?: iReseauSocial[];
  location?: iLocation;
  created_at?: string;
  updated_at?: string;
}
