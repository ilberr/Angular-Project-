import { Component, OnInit } from '@angular/core';
import { Product } from '../entities';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient,public apiService: ApiService) { }

  public products: Product[]=[];

  ngOnInit(): void {
    this.getProducts();
    
  }

  iDToString(id:any) {
      return `${id}`;
    };

    public getProducts(): void{
      this.apiService.getProducts().subscribe(
        (response: Product[])  => {
          this.products = response;
          console.log(this.products);
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
  pros = this.getidName(this.products);
  

}
