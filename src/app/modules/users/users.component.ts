import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/service/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: Observable< User[]>;
  constructor(private userService: UserService,
    private router:Router) { }

      
  ngOnInit() {
    this.userService.getUserList()
      .subscribe(data=> {
        this.users= data;
      });
   }

  

  updateUser(id:number){
    this.router.navigate(['home/updateUser',id]);
  }
  deleteUser(id:number){
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error))
  }
  reloadData(){

    this.users= this.userService.getUserList();
  }
  

 
  


}