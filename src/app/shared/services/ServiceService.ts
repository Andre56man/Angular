import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iService, ServiceType } from '../models/iService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8000/api/services';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les services
   */
  getAll(): Observable<iService[]> {
    return this.http.get<iService[]>(this.apiUrl);
  }

  /**
   * Récupère un service par ID
   */
  getById(id: number): Observable<iService> {
    return this.http.get<iService>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crée un nouveau service
   */
  create(service: iService): Observable<iService> {
    return this.http.post<iService>(this.apiUrl, service);
  }

  /**
   * Met à jour un service
   */
  update(id: number, service: iService): Observable<iService> {
    return this.http.put<iService>(`${this.apiUrl}/${id}`, service);
  }

  /**
   * Supprime un service
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Récupère les services d'un utilisateur spécifique
   */
  getByUserId(userId: number): Observable<iService[]> {
    return this.http.get<iService[]>(`${this.apiUrl}?user=${userId}`);
  }

  /**
   * Récupère les services par type
   */
  getByType(serviceType: ServiceType): Observable<iService[]> {
    return this.http.get<iService[]>(`${this.apiUrl}?type_service=${serviceType}`);
  }
}
