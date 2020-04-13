import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  name= "Amal Hajri"
  mail= "amal@neoxam.com"

  constructor() { }

  ngOnInit(): void {
  }

}
