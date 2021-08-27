import { Component, OnInit } from '@angular/core';
import { flyInOut , expand} from '../../Utilities/animations/animation';
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
  main_container = "main_container" 
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
  }
  constructor() { }

  ngOnInit(): void {
    
  }
 
  
 


}
