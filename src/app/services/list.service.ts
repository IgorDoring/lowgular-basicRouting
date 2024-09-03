import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getAllUsers(){
    return this.http.get<User[]>("https://fakestoreapi.com/users")
  }

  getUser(userId: number){
    return this.http.get<User>("https://fakestoreapi.com/users/"+userId)
  }

  getAllUserCarts(userId: number){
    return this.http.get<Cart[]>("https://fakestoreapi.com/carts/user/"+userId)
  }

  editUser(user: User){
    return this.http.put("https://fakestoreapi.com/users/"+user.id, user)
  }
}
