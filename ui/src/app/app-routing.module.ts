import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Dashboard
import { DashboardV1Page }          from './pages/dashboard/v1/dashboard-v1';




// User Login / Register
import { LoginV3Page }              from './pages/login/login-v3/login-v3';
import { RegisterV3Page }           from './pages/register/register-v3/register-v3';

// Form
import { InvestorProfile } from './pages/profile/investor-profile';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginV3Page, data: { title: 'Login V3 Page'} },
    { path: 'register', component: RegisterV3Page, data: { title: 'Register V3 Page'} },
    { path: 'dashboard/v1', component: DashboardV1Page, data: { title: 'Dashboard V1'} },
    { path: 'edit-profile', component: InvestorProfile, data: { title: 'Form Stuff'} },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
