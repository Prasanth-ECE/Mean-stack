import { Component, OnInit } from '@angular/core';
import { Interviewcreate } from '../../shared/interview-create';
import { Interview } from '../../shared/interview';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard-component.html',
  styleUrls: [ './dashboard-component.css' ]
})
export class DashboardComponent implements OnInit {
  users: Interviewcreate;
  
  constructor(private service: DataService, private router: Router, private http:HttpClient){

  }
  ngOnInit(){
    this.getusers()
  }

  getusers(){
    this.service.getProfile().subscribe(
      data => {
        this.users = data.result
      }
    )
  }
  viewdetails(user){
    this.router.navigate(['/interview/' + user._id]);
  }

}