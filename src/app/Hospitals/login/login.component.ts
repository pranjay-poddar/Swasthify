import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';
import Swal from 'sweetalert2';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class LoginComponent implements OnInit {

  id !: number;
  HLoginForm !: FormGroup;
  err !: String;
  light !: string;
  fieldTextType: boolean = false;
  
  constructor(private fb: FormBuilder, private hospService: HospitalService, private router: Router, private sharingService: SharingService) { }

  ngOnInit(): void {

    this.HLoginForm = this.fb.group({

      emailId: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],

      pass: ['', [
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],


    });

    this.light = this.sharingService.getData();
  }


  get email() {
    return this.HLoginForm.get('emailId');
  }

  get password() {
    return this.HLoginForm.get('pass');
  }


  submit() {
    this.hospService.signInHospital(this.HLoginForm.value).subscribe((data) => {
      this.id = data.id;
      Swal.fire({
        icon: 'success',
        title: 'Login Succesful',
      });
      this.router.navigate(['hospital-dashboard',this.id]);
    },
      (Error) => {
        this.err = Error.error.message;
        alert(this.err);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ('${this.err}'),
          footer: '<a href>Why do I have this issue?</a>'
        })
      });
    this.HLoginForm.reset({
      emailId: '',
      pass: '',
    });

  }

  // <!-- Switching method -->
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
  }
}

