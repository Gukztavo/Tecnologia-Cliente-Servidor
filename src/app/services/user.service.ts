import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  senha: string;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserData(email: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/usuarios'; // Base URL para buscar usuários

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    const token = sessionStorage.getItem('auth-token'); // Obtém o token armazenado
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Faz a solicitação GET para /usuarios/{email}
    return this.http.get<User>(`${this.apiUrl}/${email}`, { headers });
  }
  // Atualiza usuário
  updateUser(email: string, user: any) {
    return this.http.put<any>(`${this.apiUrl}/${email}`, user);
  }

  deleteUsuario(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${email}`);
  }
}
