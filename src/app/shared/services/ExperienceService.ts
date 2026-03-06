import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iExperience } from '../models/iExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:8000/api/experiences';

  constructor(private http: HttpClient) {}

  /**
   * Récupère toutes les expériences
   */
  getAll(): Observable<iExperience[]> {
    return this.http.get<iExperience[]>(this.apiUrl);
  }

  /**
   * Récupère une expérience par ID
   */
  getById(id: number): Observable<iExperience> {
    return this.http.get<iExperience>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée une nouvelle expérience
   */
  create(experience: iExperience): Observable<iExperience> {
    return this.http.post<iExperience>(this.apiUrl, experience);
  }

  /**
   * Met à jour une expérience
   */
  update(id: number, experience: iExperience): Observable<iExperience> {
    return this.http.put<iExperience>(`${this.apiUrl}/${id}`, experience);
  }

  /**
   * Supprime une expérience
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les expériences d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iExperience[]> {
    return this.http.get<iExperience[]>(`${this.apiUrl}?user=${userId}`);
  }
}
