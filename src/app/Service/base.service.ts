import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  serverUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  createEtel(etel: any) {
    return this.http.post(this.serverUrl + 'etelek/', etel);
  }

  getEtelek() {
    return this.http.get(this.serverUrl + 'etelek');
  }

  updateEtel(etel: any) {
    return this.http.put(this.serverUrl + `etelek/${etel.id}`, etel);
  }

  deleteEtel(id: number) {
    return this.http.delete(this.serverUrl + `etelek/${id}`);
  }

  createItal(ital: any) {
    return this.http.post(this.serverUrl + 'italok/', ital);
  }

  getItalok() {
    return this.http.get(this.serverUrl + 'italok');
  }

  updateItal(ital: any) {
    return this.http.put(this.serverUrl + `italok/${ital.id}`, ital);
  }

  deleteItal(id: number) {
    return this.http.delete(this.serverUrl + `italok/${id}`);
  }
}
