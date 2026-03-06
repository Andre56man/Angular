import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iReseauSocial } from '../models/iReseauSocial';

@Injectable({
  providedIn: 'root'
})
export class ReseauSocialService {
  private apiUrl = 'http://localhost:8000/api/social-medias';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les réseaux sociaux
   */
  getAll(): Observable<iReseauSocial[]> {
    return this.http.get<iReseauSocial[]>(this.apiUrl);
  }

  /**
   * Récupère un réseau social par ID
   */
  getById(id: number): Observable<iReseauSocial> {
    return this.http.get<iReseauSocial>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée un nouveau réseau social
   */
  create(socialMedia: iReseauSocial): Observable<iReseauSocial> {
    return this.http.post<iReseauSocial>(this.apiUrl, socialMedia);
  }

  /**
   * Met à jour un réseau social
   */
  update(id: number, socialMedia: iReseauSocial): Observable<iReseauSocial> {
    return this.http.put<iReseauSocial>(`${this.apiUrl}/${id}`, socialMedia);
  }

  /**
   * Supprime un réseau social
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les réseaux sociaux d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iReseauSocial[]> {
    return this.http.get<iReseauSocial[]>(`${this.apiUrl}?user=${userId}`);
  }
}
