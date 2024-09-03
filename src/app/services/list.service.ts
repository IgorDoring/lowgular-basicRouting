import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getAllUsers(){
    return this.http.get<any[]>("https://fakestoreapi.com/users")
  }
}
