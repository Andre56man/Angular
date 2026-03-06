export type ContractType = 'CDI' | 'CDD' | 'STAGE' | 'ALTERNANCE' | 'FREELANCE';

export interface iExperience {
  id?: number;
  user?: number;
  nom_entreprise: string;
  poste?: string | null;
  description?: string | null;
  date_debut: string; // ISO date format
  date_fin?: string | null; // ISO date format
  type_contrat: ContractType;
  created_at?: string;
  updated_at?: string;
}
