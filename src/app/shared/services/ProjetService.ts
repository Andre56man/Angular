import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iProject } from '../models/iProjet';

interface PaginatedResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: iProject[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'http://localhost:8000/api/projects';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les projets
   */
  getAll(): Observable<iProject[]> {
    return this.http.get<PaginatedResponse>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }

  /**
   * Récupère un projet par ID
   */
  getById(id: number): Observable<iProject> {
    return this.http.get<iProject>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée un nouveau projet
   */
  create(project: iProject): Observable<iProject> {
    return this.http.post<iProject>(this.apiUrl, project);
  }

  /**
   * Met à jour un projet
   */
  update(id: number, project: iProject): Observable<iProject> {
    return this.http.put<iProject>(`${this.apiUrl}/${id}`, project);
  }

  /**
   * Supprime un projet
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les projets d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iProject[]> {
    return this.http.get<PaginatedResponse>(`${this.apiUrl}?user=${userId}`).pipe(
      map(response => response.results)
    );
  }
}
