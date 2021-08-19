import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';

@Component({
  selector: 'app-forget-pas-patient',
  templateUrl: './forget-pas-patient.component.html',
  styleUrls: ['./forget-pas-patient.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class ForgetPasPatientComponent implements OnInit {

  HLoginForm !: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  
    this.HLoginForm = this.fb.group({
    
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
      
     
    });
    
    
  }



  get email(){
    return this.HLoginForm.get('email');
  }

  get password(){
    return this.HLoginForm.get('password');
  }



  submit(){
    console.log(this.HLoginForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Thank You...',  
      text: 'Login Succesfull!',  
});
  this.HLoginForm.reset({
    email: '',
    password: '',
  });
 
}


}
