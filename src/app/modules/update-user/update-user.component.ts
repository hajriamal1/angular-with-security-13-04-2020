import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import {UserInfo} from 'src/app/service/userInfo';
import { from } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: UserInfo;
  constructor(private router:Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  
  ngOnInit() {
    this.user = new UserInfo();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
        .subscribe(data=> {
          console.log(data)
          this.user= data;
        }, error => console.log(error)
        );
  }

  updateUser(){
    this.userService.updateUser(this.id,this.user)
        .subscribe(data=> console.log(data),
        error => console.log(error));
       
    this.user=new UserInfo();
    this.gotoList();
  }

  gotoList(){
    this.router.navigate(['home/users']);

  }

  onSubmit() {
    this.updateUser();    
  }

              
  /*retour(){
    this.router.navigate(['home/users']);
  }*/

  
}