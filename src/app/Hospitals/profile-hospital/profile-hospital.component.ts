import { Hospitals } from './../../models/hospitals';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { flyInOut , expand} from '../../Utilities/animations/animation';
import { ChangePassword } from 'src/app/models/changePass';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-hospital',
  templateUrl: './profile-hospital.component.html',
  styleUrls: ['./profile-hospital.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ProfileHospitalComponent implements OnInit {
  updatedpass : ChangePassword = new ChangePassword();
  id!:number;
  hospital:Hospitals = new Hospitals();
  cpass:boolean = false; // for change password form toggle
  dpass:boolean = false; // for delete profile toggle
  email!:any;
  ChangePassForm !: FormGroup;
  DeleteForm !: FormGroup;
  fieldTextType: boolean = false;
  fieldTextType2: boolean = false;
  fieldTextType3: boolean = false;
  fieldTextType4: boolean = false;
  fieldTextType5: boolean = false;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private hospitalservice:HospitalService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.hospitalservice.getDetailsOfHospital(this.id).subscribe(data =>{
      this.hospital = data;
    },
    error =>{
      console.log(error);
    })

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

  // Change Password Form ----------------------------------------

    this.ChangePassForm  = this.fb.group({
      currentPassword:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      newPassword:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      confirmNewPassword:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]]
    
    }, { 
      validator: ConfirmedValidator('newPassword', 'confirmNewPassword')
    },
    );

    //Delete Form -------------------------------------------------
    this.DeleteForm  = this.fb.group({
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
    }
    
    );
  }

  
  get currentPassword(){
    return this.ChangePassForm .get('currentPassword');
  }

  get newPassword(){
    return this.ChangePassForm .get('newPassword');
  }

  get confirmNewPassword(){
    return this.ChangePassForm .get('confirmNewPassword');
  }

  // Delete FOrm Fields ---------------------

  get pass(){
    return this.DeleteForm.get('pass');
  }

  get conPass(){
    return this.DeleteForm.get('conPass');
  }

  get agree(){
    return this.DeleteForm.get('agree');
  }

  // Change Password Submit ------------------------------- 
  submit(){
    this.hospitalservice.changePassHospital(this.ChangePassForm .value,this.id).subscribe(data=>{
      Swal.fire({  
        icon: 'success',  
        title: 'Password Changed Succesfully',   
      })
    },
    (Error) =>{
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...Error',  
        text: Error.error.message,  
      })  
    });
      
    this.ChangePassForm .reset({
      currentPassword: '',
      NewPasswor: '',
      confirmNewPasswor: '',
    });
    this.router.navigate(['/hospital-login']);
  }

  // Delete Patient Submit -----------------------------------
  submitDelete(){
    this.hospitalservice.deleteHospital(this.id).subscribe(data=>{
      Swal.fire({  
        icon: 'success',  
        title: 'Account Deleted Successfully',  
      })
    },
    (Error) =>{
      Swal.fire({  
        icon: 'error',  
        title: 'Oops...Error',  
        text: Error.error.message,  
      })  
    });
      
   this.router.navigate(['/hospital-login']);
   
  }

  // breadcrum route to patient dashboard 
  backroute(){
    this.router.navigate(['/hospital-dashboard',this.id]);
    }

  // For Change Password Toggle-----------------
  changePassword(data:any){
      if(this.cpass === false){
        this.cpass = true;
      }
      else{
        this.cpass=false;
      }  
      if(this.dpass){
        this.dpass=!this.dpass;
      }  
this.email = data; // set email
    }
 // For Delete Profile Toggle-------------------
    DeleteProfile(){
      if(this.dpass === false){
        this.dpass = true;
      }
      else{
        this.dpass=false;
      }   
      if(this.cpass){
        this.cpass=!this.cpass;
      }

    }

     // <!-- Switching method -->
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
  }
  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;
    }
    toggleFieldTextType3() {
      this.fieldTextType3 = !this.fieldTextType3;
      }
      toggleFieldTextType4() {
        this.fieldTextType4 = !this.fieldTextType4;
        }
        toggleFieldTextType5() {
          this.fieldTextType5 = !this.fieldTextType5;
          }
}
