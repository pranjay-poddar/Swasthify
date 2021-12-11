import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-forget-pas-patient',
  templateUrl: './forget-pas-patient.component.html',
  styleUrls: ['./forget-pas-patient.component.scss'],
  
    animations: [
      flyInOut(),
      expand()
    ]
})
export class ForgetPasPatientComponent implements OnInit {
  
  PForgotForm !: FormGroup;
  light ! : string;
  constructor(private fb: FormBuilder, private sharingService:SharingService) { }

  ngOnInit(): void {
    this.PForgotForm = this.fb.group({
    
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]});
    
      this.light = this.sharingService.getData(); 
  }



  get email(){
    return this.PForgotForm.get('email');
  }
  get agree(){
    return this.PForgotForm.get('agree');
  }


  submit(){
    console.log(this.PForgotForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Email Sent',  
      text: 'Please check your inbox',  
});
  this.PForgotForm.reset({
    email: '',
  });
 
}


}
