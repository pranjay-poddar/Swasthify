import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';
@Component({
  selector: 'app-signup-patient',
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.scss'],
  
    animations: [
      flyInOut(),
      expand()
    ]
})
export class SignupPatientComponent implements OnInit {

  
  PSForm !: FormGroup;
  light ! : string;
  fieldTextType: boolean = false;
  fieldTextType2: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private patientService : PatientService, private sharingService:SharingService) { }

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
    this.PSForm = this.fb.group({
      name: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      emailId: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      contact: ['',[
        Validators.required,
        // Validators.min(999999999),
        // Validators.max(99999999999)
      ]],
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      conPass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]
    }, { 
      validator: ConfirmedValidator('pass', 'conPass')
    });
    
    this.light = this.sharingService.getData();

  }



  get name(){
    return this.PSForm.get('name');
  }

  get emailId(){
    return this.PSForm.get('emailId');
  }

  get contact(){
return this.PSForm.get('contact');
  }

  get pass(){
    return this.PSForm.get('pass');
  }

  get conPass(){
    return this.PSForm.get('conPass');
  }

  get agree(){
    return this.PSForm.get('agree');
  }

  submit(){
    console.log(this.PSForm.value);
    this.patientService.registerPatient(this.PSForm.value).subscribe((data) => {
      Swal.fire({  
        icon: 'success',  
        title: 'Signup Succesful',    
        footer: '<a href="patient-login">Login</a>'  
  });
},
    (Error) =>{alert(Error.error.message)}    
 );
    this.PSForm.reset({
      name: '',
      email: '',
      contact: '',
      password: '',
      cpassword: ''
    });
   this.router.navigate(['/patient-login']);
  }

   // <!-- Switching method -->
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    }

    toggleFieldTextType2() {
      this.fieldTextType2 = !this.fieldTextType2;
      }

}
