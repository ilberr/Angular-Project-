import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, Product, User } from '../entities';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/users");
  }
  getUsersbyId(id:string):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getProductbyId(id:string):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:3000/orders");
  }
  getOrderbyId(id:string):Observable<Order>{
    return this.http.get<Order>(`http://localhost:3000/orders/${id}`);
  }
}
