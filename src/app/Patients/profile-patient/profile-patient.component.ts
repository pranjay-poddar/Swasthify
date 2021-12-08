import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from 'src/app/models/patients';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { flyInOut , expand} from '../../Utilities/animations/animation';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ProfilePatientComponent implements OnInit {

  id!:number;
  patient:Patients = new Patients();
  cpass:boolean = false;
  email!:any;
  ChangePassForm !: FormGroup;
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private patientservice:PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientservice.getPatient(this.id).subscribe(data =>{
      this.patient = data;
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
    this.ChangePassForm  = this.fb.group({
    
      pass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      conPass:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]]
    
    }, { 
      validator: ConfirmedValidator('pass', 'conPass')
    });
  }



  get pass(){
    return this.ChangePassForm .get('pass');
  }

  get conPass(){
    return this.ChangePassForm .get('conPass');
  }
  submit(){
    console.log(this.ChangePassForm .value);
  //   this.patientService.registerPatient(this.ChangePassForm .value).subscribe((data) => {
  //     Swal.fire({  
  //       icon: 'success',  
  //       title: 'Thank You...',  
  //       text: 'Information Submitted Succesfully!',  
  //       footer: '<a href="patient-login">Login</a>'  
      
  // });
  //   },
  //   (Error) =>{alert(Error.error.message)}    
  //   );

      
    this.ChangePassForm .reset({
      name: '',
      email: '',
      contact: '',
      password: '',
      cpassword: ''
    });
   
  }
  backroute(){
    this.router.navigate(['/patient-dashboard',this.id]);
    }

    changePassword(data:any){
      if(this.cpass === false){
        this.cpass = true;
      }
      else{
        this.cpass=false;
      }
      
this.email = data;
    }
}
