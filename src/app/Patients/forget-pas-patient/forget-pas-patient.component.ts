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
    function ConfirmedValidator(controlName: string, matchingControlName: string){
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ confirmedValidator: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
    this.PForgotForm = this.fb.group({
    
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      
      password:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      cpassword:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]}, { 
        validator: ConfirmedValidator('password', 'cpassword')
      });
    
      this.light = this.sharingService.getData(); 
  }



  get email(){
    return this.PForgotForm.get('email');
  }

  get password(){
    return this.PForgotForm.get('password');
  }
  get cpassword(){
    return this.PForgotForm.get('cpassword');
  }
  get agree(){
    return this.PForgotForm.get('agree');
  }


  submit(){
    console.log(this.PForgotForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Thank You...',  
      text: 'Login Succesfull!',  
});
  this.PForgotForm.reset({
    email: '',
    password: '',
  });
 
}


}
