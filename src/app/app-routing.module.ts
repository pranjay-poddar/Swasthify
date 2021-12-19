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
import { SelfAnalysisComponent } from './common-services/self-analysis/self-analysis.component';
import { ResourcesComponent } from './common-services/resources/resources.component';
import { OurProductsComponent } from './common-services/our-products/our-products.component';
import { ChatComponent } from './chat/chat/chat.component';
import { ProfilePatientComponent } from './Patients/profile-patient/profile-patient.component';
import { ProfileHospitalComponent } from './Hospitals/profile-hospital/profile-hospital.component';
import { ErrorPageComponent } from './Utilities/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hospital-login', component: LoginComponent },
  { path: 'hospital-signup', component: SignupComponent },
  { path: 'hospital-dashboard/:id', component: DashboardComponent},
  { path: 'patient-login', component: LoginPatientComponent },
  { path: 'patient-signup', component: SignupPatientComponent },
  { path: 'patient-dashboard/:id', component: DashboardPatientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'h-forget-pas', component: ForgetPasComponent },
  { path: 'p-forget-pas', component: ForgetPasPatientComponent },
  { path: 'self-analysis', component: SelfAnalysisComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'our-products', component: OurProductsComponent },
  { path: 'p-profile/:id', component: ProfilePatientComponent },
  { path: 'h-profile/:id', component: ProfileHospitalComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'error-page', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
