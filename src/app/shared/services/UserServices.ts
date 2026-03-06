import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iUser } from '../models/iUser';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}


  getAll(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }

  getById(id: number): Observable<iUser> {
    return this.http.get<iUser>(`${this.apiUrl}/${id}`);
  }

  create(user: iUser): Observable<iUser> {
    return this.http.post<iUser>(this.apiUrl, user);
  }

  update(id: number, user: iUser): Observable<iUser> {
    return this.http.put<iUser>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getProjects(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}/projects`);
  }

 
  getExperiences(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}/experiences`);
  }

  getServices(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}/services`);
  }

  getContacts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}/contacts`);
  }

  getSocialMedias(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}/social-medias`);
  }


  
  getLocation(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}/location`);
  }
}
