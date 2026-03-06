export type ServiceType = 'DEVELOPMENT' | 'DESIGN' | 'MARKETING' | 'CONSULTATION' | 'OTHER';

export interface iService {
  id?: number;
  user?: number;
  nom: string;
  detail: string;
  type_service: ServiceType;
  outil?: string | null;
  created_at?: string;
  updated_at?: string;
}
