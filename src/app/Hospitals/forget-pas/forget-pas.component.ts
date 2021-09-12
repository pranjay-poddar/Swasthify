import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-forget-pas',
  templateUrl: './forget-pas.component.html',
  styleUrls: ['./forget-pas.component.scss'],
  
    animations: [
      flyInOut(),
      expand()
    ]
})
export class ForgetPasComponent implements OnInit {
  HForgotForm !: FormGroup;
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
    this.HForgotForm = this.fb.group({
    
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
    return this.HForgotForm.get('email');
  }

  get password(){
    return this.HForgotForm.get('password');
  }
  get cpassword(){
    return this.HForgotForm.get('cpassword');
  }
  get agree(){
    return this.HForgotForm.get('agree');
  }


  submit(){
    console.log(this.HForgotForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Thank You...',  
      text: 'Login Succesfull!',  
});
  this.HForgotForm.reset({
    email: '',
    password: '',
  });
 
}

}
