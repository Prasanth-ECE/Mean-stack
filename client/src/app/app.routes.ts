import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { ProfilePage } from './components/profile-page/profile-page';
import { AdminPage } from './components/admin-page/admin-page';
import { DashboardComponent } from './components/dashboard/dashboard-component';
import { InterviewPageComponent } from './components/interview-page/interview-page.component';
import { GeoMapComponent } from './geo-map/geo-map.component';
import { BingSearchComponent } from './components/bing-search/bing-search.component';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

export const Approute:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component : LoginPage, canActivate: [NotAuthGuard] },
  { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
  { path: 'interview/:id', component : InterviewPageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component : ProfilePage, canActivate: [AuthGuard] },
  { path: 'admin', component : AdminPage, canActivate: [AuthGuard] },
  { path: 'map', component : GeoMapComponent},
  { path: 'search', component : BingSearchComponent},
]

