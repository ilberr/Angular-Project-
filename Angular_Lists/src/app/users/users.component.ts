import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../entities';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[]=[]
    
    constructor(private http: HttpClient,public apiService: ApiService) { }

    ngOnInit(): void {
      this.getUsers();
    }
    public getUsers(): void{
      this.apiService.getUsers().subscribe(
        (response: User[])  => {
          this.users = response;
          console.log(this.users);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        
      );
    }
    iDToString(id:any) {
      return `${id}`;
    };

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
  pros = this.getidName(this.users);
  
}
