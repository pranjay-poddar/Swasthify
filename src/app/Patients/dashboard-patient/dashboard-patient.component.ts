import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.scss']
})




export class DashboardPatientComponent implements OnInit {
  sidenav = "";
  sidenavTitle = ""; 
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
  }
  constructor() { }

  ngOnInit(): void {
    
  }
 
  
 


}
