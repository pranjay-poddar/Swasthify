import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hospitals } from 'src/app/models/hospitals';
import { HospitalService } from 'src/app/services/hospital.service';
import { DashboardPatientComponent } from '../dashboard-patient/dashboard-patient.component';
@Component({
  selector: 'app-hosp-details-dialog',
  templateUrl: './hosp-details-dialog.component.html',
  styleUrls: ['./hosp-details-dialog.component.scss']
})
export class HospDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DashboardPatientComponent, private hospService : HospitalService, private dialog : MatDialog) { }

  id ! : any;
  hospital : Hospitals = new Hospitals();
  ngOnInit(): void {
    this.id = this.data
    this.hospService.getDetailsOfHospital(this.id).subscribe((data) => {
      this.hospital = data;
    },
    (Error) => {console.log(Error.error.message)}
    );
  }
  dialogClose(){
    this.dialog.closeAll();
  }


}
