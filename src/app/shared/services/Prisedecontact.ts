import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iPrisedecontact } from '../models/iPrisedecontact';

@Injectable({
  providedIn: 'root'
})
export class Prisedecontact {
  private apiUrl = 'http://localhost:8000/api/contacts';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les contacts
   */
  getAll(): Observable<iPrisedecontact[]> {
    return this.http.get<iPrisedecontact[]>(this.apiUrl);
  }

  /**
   * Récupère un contact par ID
   */
  getById(id: number): Observable<iPrisedecontact> {
    return this.http.get<iPrisedecontact>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée un nouveau contact
   */
  create(contact: iPrisedecontact): Observable<iPrisedecontact> {
    return this.http.post<iPrisedecontact>(this.apiUrl, contact);
  }

  /**
   * Met à jour un contact
   */
  update(id: number, contact: iPrisedecontact): Observable<iPrisedecontact> {
    return this.http.put<iPrisedecontact>(`${this.apiUrl}/${id}`, contact);
  }

  /**
   * Supprime un contact
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les contacts d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iPrisedecontact[]> {
    return this.http.get<iPrisedecontact[]>(`${this.apiUrl}?user=${userId}`);
  }
}
