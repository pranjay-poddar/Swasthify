import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss'],
    animations: [
      flyInOut(),
      expand()
    ]
})
export class LoginPatientComponent implements OnInit {
  PLoginForm !: FormGroup;
  id ! : number;
  light ! : string;
  fieldTextType: boolean = false;
  constructor(private fb: FormBuilder, private patientServ : PatientService, private router : Router, private sharingService:SharingService) { }

  ngOnInit(): void {
  
    this.PLoginForm = this.fb.group({
    
      emailId: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      
     
    });
    
    this.light = this.sharingService.getData();
    
  }



  get email(){
    return this.PLoginForm.get('emailId');
  }

  get password(){
    return this.PLoginForm.get('pass');
  }


     // <!-- Switching method -->
     toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
      }

  submit(){
    this.patientServ.loginPatient(this.PLoginForm.value).subscribe((data) => {
      this.id = data.id;
      Swal.fire({  
        icon: 'success',  
        title: 'Login Succesful',    
      });
      setTimeout(() => {
        this.router.navigate(['patient-dashboard',this.id]);
      },1000);
    },
    (Error) =>{alert(Error.error.message)}
    );
    
  this.PLoginForm.reset({
    emailId: '',
    pass: '',
  });
 
}

}

