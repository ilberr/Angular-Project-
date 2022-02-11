import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { ApiService } from '../service/api.service';
import { User } from '../entities';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[]=[];
  public userProp!:User;

  constructor(private route: ActivatedRoute, public apiservice: ApiService) { }
  
  iDToString(id:any) {
    return `${id}`;
  };
  n = this.users.length;
  getById(id:string){
    return this.apiservice.getUsersbyId(id).subscribe(
      (response: User)  => {
        this.userProp = response;
        console.log(this.userProp);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
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
    console.log(this.userProp)
    console.log(id)
  }

}
