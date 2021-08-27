import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hospitals } from 'src/app/models/hospitals';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  id ! : number;
  hospitals : Hospitals = new Hospitals();
  constructor(private hospService : HospitalService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.hospService.getHospById(this.id).subscribe((data) => {
      this.hospitals = data;
      console.log(this.hospitals);
    },
    (Error) => {
      console.log(Error.error.message);
    });
  }

}
