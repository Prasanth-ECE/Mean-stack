import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data-service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.html',
  styleUrls: [ './profile-page.css' ]
})
export class ProfilePage implements OnInit {
  username;
  ngOnInit(){
    this.getprofile()
  }
  getprofile(){
    this.username = localStorage.getItem('user').split('@')[0]
  }

}