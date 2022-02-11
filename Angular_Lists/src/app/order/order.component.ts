import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../entities';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, public apiservice: ApiService) { }

  public OrderProp!: Order;


  iDToString(id:any) {
    return `${id}`;
  };

  getById(id:string){
    return this.apiservice.getOrderbyId(id).subscribe(
      (response: Order)  => {
        this.OrderProp = response;
        console.log(this.OrderProp);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
  //n = this.orders.length;
  nextId =0;
  previousId =1;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      let s =+id;
      this.nextId = s+1;
      this.previousId = s-1;
    }
    //this.OrderProp = this.getById(this.orders,id)
    this.getById(id!)
    console.log(this.OrderProp)
    console.log(id)
    console.log(id)
  }

}
