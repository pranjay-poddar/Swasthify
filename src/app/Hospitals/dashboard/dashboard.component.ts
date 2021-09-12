import { Component, OnInit , OnDestroy} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Hospitals } from 'src/app/models/hospitals';
import { HospitalService } from 'src/app/services/hospital.service';
import Swal from 'sweetalert2';
import { SharingService } from 'src/app/services/sharing.service';

import { flyInOut, expand } from '../../Utilities/animations/animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class DashboardComponent implements OnInit {
  step: any = 1;
  one: any = "c1";
  two: any;
  three: any;
  id !: number;
  time = new Date();
  date=Date();
  hospitals: Hospitals = new Hospitals();
  intervalId:any;
  subscription: any;
  light ! : string;
  constructor(private hospService: HospitalService, private router: ActivatedRoute, private sharingService:SharingService) { }

  ngOnInit(): void {
    this.light = this.sharingService.getData();
    console.log(this.light);
 // Using Basic Interval for clock
 this.intervalId = setInterval(() => {
  this.time = new Date();
  }, 1000);


    this.id = this.router.snapshot.params['id'];
    this.hospService.getHospById(this.id).subscribe((data) => {
      this.hospitals = data;
      console.log(this.hospitals);
    },
    (Error) => {
      console.log(Error.error.message);
    });

    
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateEntries() {
    this.hospService.updateDetailsOfHospital(this.id, this.hospitals).subscribe((data) => {
      this.hospitals = data;
      console.log(this.hospitals); 
      Swal.fire('Updated Successfully');  
    },
    (Error) => {
      console.log(Error.error.message);
    })

  }

  submit() {
    if (this.step == 1) {
      this.two = "c1";
    }
    else if (this.step == 2) {
      this.three = "c1";
    }
    this.step = this.step + 1;
  }



  previous() {
    if (this.step == 3) {
      this.three = "c2";
    }
    else if (this.step == 2) {
      this.two = "c2";
    }
    this.step = this.step - 1;

  }

}
