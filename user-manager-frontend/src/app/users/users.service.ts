import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  listUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  addUser(userData: any) {
    return this.http.post('http://localhost:3000/users', userData);
  }

  editUser(userData: any, id: number) {
    return this.http.put(`http://localhost:3000/users/${id}`, userData);
  }

  deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
