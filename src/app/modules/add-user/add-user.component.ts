import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlHandlingStrategy } from '@angular/router';
import { User } from '../../service/user';
import { UserService } from '../../service/user.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  
selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  info : any;
  form: any = {};
    signupInfo: User;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';
  constructor(private router:Router,
               private userService: UserService,
               private token: TokenStorageService
                ) { }
    
    ngOnInit() {this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
  } }

    onSubmit() {
      console.log(this.form);
   
      this.signupInfo = new User(
        this.form.id,
        this.form.name,
        this.form.username,
        this.form.email,
        this.form.password);
   
      this.userService.addUser(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );
    }

    
    
    

   /* save(){
      this.authService.signUp(this.signuoInfo)
      .subscribe(data => { 
 
        this.gotoList();
        }, error => console.error(error)
        );
      }
            
    
   
    gotoList(){
      this.router.navigate(['home/users']);

    }*/
  

}
   


    
   