import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Hospitals/signup/signup.component';
import { LoginComponent } from './Hospitals/login/login.component';
import { DashboardComponent } from './Hospitals/dashboard/dashboard.component';
import { HomeComponent } from './Home/home/home.component';
import { SignupPatientComponent } from './Patients/signup-patient/signup-patient.component';
import { LoginPatientComponent } from './Patients/login-patient/login-patient.component';
import { DashboardPatientComponent } from './Patients/dashboard-patient/dashboard-patient.component';
import { ForgetPasComponent } from './Hospitals/forget-pas/forget-pas.component';
import { ForgetPasPatientComponent } from './Patients/forget-pas-patient/forget-pas-patient.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'hospital-login', component: LoginComponent},
{path: 'hospital-signup', component: SignupComponent},
{path: 'hospital-dashboard', component: DashboardComponent},
{path: 'patient-login', component: LoginPatientComponent},
{path: 'patient-signup', component: SignupPatientComponent},
{path: 'patient-dashboard', component: DashboardPatientComponent},
{path: 'home', component: HomeComponent},
{path: 'h-forget-pas', component: ForgetPasComponent},
{path: 'p-forget-pas', component: ForgetPasPatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
