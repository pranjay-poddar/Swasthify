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
  tempDetails : HospitalDetails[] = [];
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
    // /*---sample to be deleted----*/
    // this.hospitalDetails = [
    //   {
    //     "id" : 1,
    //     "hospitalName" : "max hospital",
    //     "emailId" : "ramesh@gmail.com",
    //     "city" : "Lucknow",
    //     "contact" : 93979323,
    //     "icuBeds" : 100,
    //     "isolationBeds" : 120,
    //     "oxygenCylinders" : 25,
    //     "vaccine1" : 50,
    //     "vaccine2" : 40,
    //     "state" : "Uttar Pradesh"
    //   },
    //   {
    //     "id" : 1,
    //     "hospitalName" : "Fortis hospital",
    //     "emailId" : "ramesh@gmail.com",
    //     "city" : "Lucknow",
    //     "contact" : 93979323,
    //     "icuBeds" : 100,
    //     "isolationBeds" : 120,
    //     "oxygenCylinders" : 25,
    //     "vaccine1" : 50,
    //     "vaccine2" : 40,
    //     "state" : "Uttar Pradesh"
    //   },
    //   {
    //     "id" : 1,
    //     "hospitalName" : "Fortis hospital",
    //     "emailId" : "ramesh@gmail.com",
    //     "city" : "Lucknow",
    //     "contact" : 93979323,
    //     "icuBeds" : 100,
    //     "isolationBeds" : 120,
    //     "oxygenCylinders" : 25,
    //     "vaccine1" : 50,
    //     "vaccine2" : 40,
    //     "state" : "Uttar Pradesh"
    //   },
    //   {
    //     "id" : 1,
    //     "hospitalName" : "Fortis hospital",
    //     "emailId" : "ramesh@gmail.com",
    //     "city" : "Lucknow",
    //     "contact" : 93979323,
    //     "icuBeds" : 100,
    //     "isolationBeds" : 120,
    //     "oxygenCylinders" : 25,
    //     "vaccine1" : 50,
    //     "vaccine2" : 40,
    //     "state" : "Uttar Pradesh"
    //   }
    // ]
    //original content
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
    this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
      this.totService = data;
    });
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
    this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
      this.totService = data;
    });
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
    this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
      this.totService = data;
    });
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
    this.PatientService.getTotalServicesByCity(this.city).subscribe((data) => {
      this.totService = data;
    });
    this.hospitalDetails = temp;
  }

  

}


