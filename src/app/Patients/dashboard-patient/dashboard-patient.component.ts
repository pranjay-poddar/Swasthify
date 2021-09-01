import { Component, OnInit } from '@angular/core';
import { HospitalDetails } from 'src/app/models/hospital-details';
import { TotalService } from 'src/app/models/total-service';
import { PatientService } from 'src/app/services/patient.service';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import {MatDialog} from '@angular/material/dialog';
import { HospDetailsDialogComponent } from '../hosp-details-dialog/hosp-details-dialog.component';

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
  sidenav = "";
  sidenavTitle = "";
  main_container = "main_container" ;
  city! : String;
  hospitalDetails : HospitalDetails[] = [];
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
  constructor(private PatientService : PatientService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.PatientService.getTotalServices().subscribe((data) => {
      this.totService = data;
    },
    (Error) => {console.log(Error.error.message)}
    );
    
  }
  findHospitals(){
    this.PatientService.getDetailsOfHospitalsByCity(this.city).subscribe((data) => {
      this.hospitalDetails = data;
      this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
        this.totService = data;
      })
      console.log(this.hospitalDetails);
    },
    (Error) => {console.log(Error.error.message)}
    );
  }
  openDialog(id : number) {
    this.dialog.open(HospDetailsDialogComponent, {
      data: {
        id : id
      }
    });
  }

  

}


