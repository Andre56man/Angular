export interface iLocation {
  id?: number;
  user?: number;
  pays: string;
  ville: string;
  quartier?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  points?: string | null;
  created_at?: string;
  updated_at?: string;
}
