import { Component, OnInit, OnDestroy } from '@angular/core';
import { HospitalDetails } from 'src/app/models/hospital-details';
import { TotalService } from 'src/app/models/total-service';
import { PatientService } from 'src/app/services/patient.service';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import {MatDialog} from '@angular/material/dialog';
import { HospDetailsDialogComponent } from '../hosp-details-dialog/hosp-details-dialog.component';
import { Subscription, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from 'src/app/models/patients';
import Swal from 'sweetalert2';
import { ChatDataTransferService } from 'src/app/services/chat-data-transfer.service';

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
 
})
export class DashboardPatientComponent implements OnInit {
  date=Date();
  sidenav = "";
  sidenavTitle = "";
  main_container = "main_container" ;
  city! : String;
  hospitalDetails : HospitalDetails[] = [];
  tempDetails : HospitalDetails[] = [];
  time = new Date();
  id ! : number;
  patient : Patients = new Patients();
  intervalId:any;
  subscription: any;

  logoutalert(){  
    Swal.fire('Thank you...', 'Logout succesfully!', 'success')  
  } 

  toggleNav(){
    if(this.sidenav){
      this.sidenav = "";
    }
    else{
      this.sidenav = "sidenav2";
    }
    if(this.sidenavTitle){
      this.sidenavTitle = "";
    }
    else{
      this.sidenavTitle = "sidenavTitle2";
    }
    if(this.main_container=="main_container"){
      this.main_container = "main_container2";
    }
    else{
      this.main_container = "main_container";
    }
  };

  totService : TotalService = new TotalService();
  constructor(private PatientService : PatientService, public dialog: MatDialog, private route : ActivatedRoute,private router: Router, private chatService : ChatDataTransferService) { }

  ngOnInit(): void {
    // Using Basic Interval for clock
    this.intervalId = setInterval(() => {
    this.time = new Date();
    }, 1000);
    this.id = this.route.snapshot.params['id'];
    this.PatientService.getPatient(this.id).subscribe((data) => {
      this.patient = data;
      this.chatService.user = this.patient.name;
      this.chatService.emailId= this.patient.emailId;
    },
    (Error) => {console.log(Error.error.message)}
    );

    this.PatientService.getTotalServices().subscribe((data) => {
      this.totService = data;
    },
    (Error) => {console.log(Error.error.message)}
    );
    
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

 
findHospitalByDefault(data:any){
  this.city = data;
  this.findHospitals();
}

  findHospitals(){
    setTimeout(() => {
      this.PatientService.getDetailsOfHospitalsByCity(this.city).subscribe((data) => {
        this.hospitalDetails = data;
        this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
          this.totService = data;
        })
      },
      (Error) => {console.log(Error.error.message)}
      );
    }, 500);
  }
  //open daialog of details-----
  openDialog(id : number) {
    this.dialog.open(HospDetailsDialogComponent,{
      data : id,
    });
  }
  findIcu(){
    let temp : any = [];
    this.PatientService.getHospitalsByService(this.city).subscribe((data) => {
      this.tempDetails = data;
      for(let a of this.tempDetails){
        if(a.icuBeds > 0){
          temp.push(a);
        }
      }
    }); 
    setTimeout(() => {
      this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
        this.totService = data;
      });
    },2000);
    
    this.hospitalDetails = temp;
  }
  findOxygencylinders(){
    let temp : any = [];
    this.PatientService.getHospitalsByService(this.city).subscribe((data) => {
      this.tempDetails = data;
      for(let a of this.tempDetails){
        if(a.oxygenCylinders > 0){
          temp.push(a);
        }
      }
    }); 
    setTimeout(() => {
      this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
        this.totService = data;
      });
    },2000);
    this.hospitalDetails = temp;
  }
  findVaccines(){
    let temp : any = [];
    this.PatientService.getHospitalsByService(this.city).subscribe((data) => {
      this.tempDetails = data;
      for(let a of this.tempDetails){
        if(a.vaccine1 > 0 || a.vaccine2 > 0){
          temp.push(a);
        }
      }
    }); 
    setTimeout(() => {
      this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
        this.totService = data;
      });
    },2000);
    this.hospitalDetails = temp;
  }
  findIsolationBeds(){
    let temp : any = [];
    this.PatientService.getHospitalsByService(this.city).subscribe((data) => {
      this.tempDetails = data;
      for(let a of this.tempDetails){
        if(a.isolationBeds > 0){
          temp.push(a);
        }
      }
    }); 
    setTimeout(() => {
      this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
        this.totService = data;
      });
    },2000);
    this.hospitalDetails = temp;
  }
  profile(){
    this.router.navigate(['/p-profile',this.id]);
  }

  

}


