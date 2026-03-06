import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iLocation } from '../models/iLocation';

@Injectable({
  providedIn: 'root'
})
export class LocationServices {
  private apiUrl = 'http://localhost:8000/api/locations';

  constructor(private http: HttpClient) {}

  /**
   * Récupère toutes les localisations
   */
  getAll(): Observable<iLocation[]> {
    return this.http.get<iLocation[]>(this.apiUrl);
  }

  /**
   * Récupère une localisation par ID
   */
  getById(id: number): Observable<iLocation> {
    return this.http.get<iLocation>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée une nouvelle localisation
   */
  create(location: iLocation): Observable<iLocation> {
    return this.http.post<iLocation>(this.apiUrl, location);
  }

  /**
   * Met à jour une localisation
   */
  update(id: number, location: iLocation): Observable<iLocation> {
    return this.http.put<iLocation>(`${this.apiUrl}/${id}`, location);
  }

  /**
   * Supprime une localisation
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère la localisation d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iLocation> {
    return this.http.get<iLocation>(`${this.apiUrl}?user=${userId}`);
  }
}
