import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getAllUsers(){
    return this.http.get<User[]>("https://fakestoreapi.com/users")
  }
}
