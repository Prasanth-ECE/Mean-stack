import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { UserModel } from './shared/user-model';
import { UserInput } from './shared/user-input';
import { Interviewcreate } from './shared/interview-create';
import { Interview } from './shared/interview';
import { Joke } from './shared/joke';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  authToken;user;
 // User: UserModel;
  options;
  constructor(private http: HttpClient) { }
  getjoke(): Observable<Joke> {
    return this.http.get<Joke>('http://api.icndb.com/jokes/random')
  }
  login(user:UserInput): Observable<UserModel> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<UserModel>('http://localhost:3000/user/login', user, {headers:headers})
  }
  storeUserData(token, user, admin) {
    console.log(admin)
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken() {
    this.authToken = localStorage.getItem('token');
  }
  getProfile(): Observable<Interview> {
    return this.http.get<Interview>('http://localhost:3000/interview')
  }
  logout() {
    this.authToken = localStorage.removeItem('token');
    this.user = localStorage.removeItem('user');
    localStorage.removeItem('admin');
    localStorage.clear()
  }
  loggedIn() {
    return tokenNotExpired();
  }
  adminaccess(){
    const adminvalue = localStorage.getItem('admin')
    if(adminvalue === "undefined"){
      return false
    }
    else {
      return true
    }
  }
createinterview(input: Interviewcreate): Observable<Interviewcreate[]> {
    return this.http.post<Interviewcreate[]>('http://localhost:3000/interview', input)
  }
getById(id): Observable<Interview>{
  return this.http.get<Interview>('http://localhost:3000/interview/' + id)
}
delete(id) : Observable<Interviewcreate>{
  return this.http.delete<Interviewcreate>('http://localhost:3000/interview/'+ id)
}

}