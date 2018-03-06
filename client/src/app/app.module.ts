import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatSelectModule, MatCheckboxModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';


import { DataService } from './data-service';
import { AuthInterceptor  } from './data-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './components/login-page/login-page';
import { HeaderPage } from './components/header-page/header-page';
import { ProfilePage } from './components/profile-page/profile-page';
import { AdminPage } from './components/admin-page/admin-page';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { Approute } from './app.routes';
import { InterviewPageComponent } from './components/interview-page/interview-page.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { GeoMapComponent } from './geo-map/geo-map.component';
import { BingSearchComponent } from './components/bing-search/bing-search.component';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule,
  NgbModule.forRoot(),
  MatSelectModule, MatCheckboxModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
  //RouteModule,
 RouterModule.forRoot(Approute),
  Ng4GeoautocompleteModule.forRoot()
   ],
  declarations: [ AppComponent, LoginPage, HeaderPage, DashboardComponent, ProfilePage, AdminPage, InterviewPageComponent, GeoMapComponent, BingSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard, NotAuthGuard
  ]
})
export class AppModule { }
