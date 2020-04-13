import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  info : any;
  constructor(private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
  }
}

    logout(){
      this.token.signOut();
      //window.location.reload();
      this.router.navigate(['']);

      
    }
   

}
