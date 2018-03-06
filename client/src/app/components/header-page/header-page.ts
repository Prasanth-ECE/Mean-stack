import { Component } from '@angular/core';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.html',
  styleUrls: [ './header-page.css' ]
})
export class HeaderPage  {
  constructor(private service: DataService,
  private router: Router){

  }
  logout(){
    console.log('You are logged out')
    this.service.logout();
    this.router.navigate(['/login'])
  }
  
}
