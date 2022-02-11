import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entities';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[]=[];
  public productProp!: Product;


  constructor(private route: ActivatedRoute, public apiservice: ApiService) { }

  iDToString(id:any) {
    return `${id}`;
  };

  getById(id:string){
    return this.apiservice.getProductbyId(id).subscribe(
      (response: Product)  => {
        this.productProp = response;
        console.log(this.productProp);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
  n = this.products.length;
  nextId =0;
  previousId =1;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      let s =+id;
      this.nextId = s+1;
      this.previousId = s-1;
    }
    this.getById(id!)
    console.log(this.productProp)
    console.log(id)
  }

}
