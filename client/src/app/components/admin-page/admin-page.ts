import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../data-service';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Interviewcreate } from '../../shared/interview-create';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.html',
  styleUrls: [ './admin-page.css' ]
})
export class AdminPage  {
  interviewform: FormGroup;
  gendervalue:string = 'male';
  interviewselect:string = 'F2F';
  interviewersel:string = 'Person1';
  time = { hour: 20, minute: 20 };
  public date: Date = new Date();
  model: NgbDateStruct;
  model2: Date;
  


serverdate = new Date();
dd= this.serverdate.getDate();
mm= this.serverdate.getMonth()+1;
year = this.serverdate.getFullYear();
day= this.serverdate.getDay();
hours = this.serverdate.getHours();
minute = this.serverdate.getMinutes();

  constructor(private service: DataService, private fb: FormBuilder, private http: HttpClient,
  private router: Router){
    this.time.hour = new Date().getHours()
    this.time.minute = new Date().getMinutes();

     this.interviewform = this.fb.group({
     'name': [null, Validators.required],
     'gender': ['', Validators.required],
     'phone' : ['', Validators.required],
     'department' : ['', Validators.required],
     'interviewtype' : ['', Validators.required],
     'date' : ['', Validators.required],
     'time' : ['', Validators.required],
     'interviewer' : ['', Validators.required],
      });
      setInterval(() => {
          this.date = new Date();
        }, 1000);
  
  }
  resete(){
    this.interviewform.reset();
  }
  createinterview(){
    this.service.createinterview(this.interviewform.value)
    .subscribe(
      (result) => {
      if(result){
        setTimeout(() => {
          this.router.navigate['/dashboard']
        },500)
      }
      else{console.log('failed')}
    })
  }
  
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }
  isDisabled(date: NgbDateStruct, current: {month: number}) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6; // || d.getMonth()+1 !== monthvalue;
  }
  get today() {
    return new Date();
  }

}
