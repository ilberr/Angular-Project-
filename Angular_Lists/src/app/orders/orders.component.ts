import { Component, OnInit } from '@angular/core';
import { Order } from '../entities';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[]=[];

  constructor(private http: HttpClient,public apiService: ApiService) { }



    iDToString(id:any) {
      return `${id}`;
    };
ngOnInit(): void {
      this.getOrders();
    }
public getOrders(): void{
      this.apiService.getOrders().subscribe(
        (response: Order[])  => {
          this.orders = response;
          console.log(this.orders);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        
      );
    }
  getValues(products:any, key:string):Array<String>{
    let iDs = [];
    for(var product of products){
      let value:string;
      value = this.iDToString(product[key]);
      iDs.push(value);
    }
    return iDs;
  }
  getidName(products:any){
    let pros=[];
    let iDs:Array<String> = this.getValues(products,"id");
    let noms:Array<String> = this.getValues(products,"name");
    for(let i=0;i<products.length;i++){
      let product ={
        "id":iDs[i],
        "name":noms[i]
      };
      pros.push(product);
    }
    return pros;
  };
  pros = this.getidName(this.orders);
 

}
