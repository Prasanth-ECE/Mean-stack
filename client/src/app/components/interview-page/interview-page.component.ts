import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../data-service';
import 'rxjs/add/operator/switchMap';
import { Interview } from '../../shared/interview';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-interview-page',
  templateUrl: './interview-page.component.html',
  styleUrls: ['./interview-page.component.css']
})
export class InterviewPageComponent implements OnInit {
  updateInterview: FormGroup;
  id;
  details:{};
  closeResult: string;
  confirmDelete: boolean = false;
  updateshow:boolean = false;
  errorMsg;
  notshow:boolean = true;
  selected = 'option2';
  gendervalue:string = '';

  constructor(private router:Router, private route:ActivatedRoute, private service: DataService,
    private modalService: NgbModal, private fb: FormBuilder
  ) {
    
  }

generateinterview(){
  this.updateInterview = this.fb.group({
      'name': [null, Validators.required],
      'gender': [this.gendervalue, Validators.required],
      'phone' : ['', Validators.required],
      'department' : ['', Validators.required],
      'interviewtype' : ['', Validators.required],
      'date' : ['', Validators.required],
      'time' : ['', Validators.required],
      'interviewer' : ['', Validators.required],
       })
}
  ngOnInit() {
    //console.log(this)
    this.route.paramMap.subscribe(
      params => this.id = params.get('id')
    )
    this.route.paramMap
    .switchMap(params => 
    
      this.service.getById(params.get('id'))
    )
    .subscribe(customer => {
      if(customer.result){
        this.gendervalue = customer.gender;
        this.details = customer.result;
        console.log(customer.result)
        this.generateinterview()
      }
      else{
        this.notshow = false;
        this.errorMsg = 'User not found';
      }
      
    });
  //this.getIndetails()
  }
  update(){
    this.updateshow = true;
  }
  updatecancel(){
    this.updateshow = false;
  }
  delete() {
    this.confirmDelete = true;
  }
  abortDelete() {
    this.confirmDelete = false;
  }
  deleteConfirmed() {
    this.service.delete(this.id)
    .subscribe(customer => this.router.navigateByUrl('/dashboard'));
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
