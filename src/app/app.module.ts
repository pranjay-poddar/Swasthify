import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Hospitals/signup/signup.component';
import { LoginComponent } from './Hospitals/login/login.component';
import { DashboardComponent } from './Hospitals/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Utilities/navbar/navbar.component';
import { FooterComponent } from './Utilities/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { SignupPatientComponent } from './Patients/signup-patient/signup-patient.component';
import { LoginPatientComponent } from './Patients/login-patient/login-patient.component';
import { DashboardPatientComponent } from './Patients/dashboard-patient/dashboard-patient.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { AlertmsgComponent } from './Utilities/alertmsg/alertmsg.component';
import { ForgetPasComponent } from './Hospitals/forget-pas/forget-pas.component';
import { ForgetPasPatientComponent } from './Patients/forget-pas-patient/forget-pas-patient.component';
import { SelfAnalysisComponent } from './common-services/self-analysis/self-analysis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResourcesComponent } from './common-services/resources/resources.component';
import { OurProductsComponent } from './common-services/our-products/our-products.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { SharingService } from './services/sharing.service';
import { ChatComponent } from './chat/chat/chat.component';
import { ProfilePatientComponent } from './Patients/profile-patient/profile-patient.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProfileHospitalComponent } from './Hospitals/profile-hospital/profile-hospital.component';
import { ErrorPageComponent } from './Utilities/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SignupPatientComponent,
    LoginPatientComponent,
    DashboardPatientComponent,
    AlertmsgComponent,
    ForgetPasComponent,
    ForgetPasPatientComponent,
    SelfAnalysisComponent,
    ResourcesComponent,
    OurProductsComponent,
    ChatComponent,
    ProfilePatientComponent,
    ProfileHospitalComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
