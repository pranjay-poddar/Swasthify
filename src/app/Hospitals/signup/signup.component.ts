import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
import Swal from 'sweetalert2';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
 
    animations: [
      flyInOut(),
      expand()
    ]
})
export class SignupComponent implements OnInit {

  HSForm !: FormGroup;
  err ! : String;
  light ! : string;
  fieldTextType: boolean = false;
  fieldTextType2: boolean = false;
  constructor(private fb: FormBuilder,private router:Router, private hospService : HospitalService, private sharingService:SharingService) { }

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
    this.HSForm = this.fb.group({
      hospitalName: ['',[
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
    return this.HSForm.get('hospitalName');
  }

  get email(){
    return this.HSForm.get('emailId');
  }

  get contact(){
return this.HSForm.get('contact');
  }

  get password(){
    return this.HSForm.get('pass');
  }

  get cpassword(){
    return this.HSForm.get('conPass');
  }

  get agree(){
    return this.HSForm.get('agree');
  }

  submit(){
    console.log(this.HSForm.value);
    this.hospService.signUpHospital(this.HSForm.value).subscribe((data) => {
      Swal.fire({  
        icon: 'success',  
        title: 'Signup Succesful',   
        footer: '<a href="hospital-login">Login</a>'  
      })
    },
    (Error) => {
      this.err = Error.error.message;  
      alert(this.err);
      // Swal.fire({  
      // icon: 'error',  
      // title: 'Oops...',  
      // text: 'this.err',  
      // })   
    });
  this.HSForm.reset({
    name: '',
    email: '',
    contact: '',
    password: '',
    cpassword: ''
  });
  this.router.navigate(['/hospital-login']);
 
}
 // <!-- Switching method -->
 toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;
    }
  }


