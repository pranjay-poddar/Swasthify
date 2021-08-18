import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  HSForm !: FormGroup;
  constructor(private fb: FormBuilder) { }

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
      name: ['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(46)
      ]],
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      contact: ['',[
        Validators.required,
        Validators.min(999999999),
        Validators.max(99999999999)
      ]],
      password:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8)
      ]],
      cpassword:['',[
        Validators.required,
        Validators.pattern('^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))).{8,32}$'),
        Validators.minLength(8),
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]
    }, { 
      validator: ConfirmedValidator('password', 'cpassword')
    });
    
    
  }



  get name(){
    return this.HSForm.get('name');
  }

  get email(){
    return this.HSForm.get('email');
  }

  get contact(){
return this.HSForm.get('contact');
  }

  get password(){
    return this.HSForm.get('password');
  }

  get cpassword(){
    return this.HSForm.get('cpassword');
  }

  get agree(){
    return this.HSForm.get('agree');
  }

  submit(){
    console.log(this.HSForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Thank You...',  
      text: 'Information Submitted Succesfully!',  
      footer: '<a href="hospital-login">Login</a>'  
    
});
  this.HSForm.reset({
    name: '',
    email: '',
    contact: '',
    password: '',
    cpassword: ''
  });
 
}
  }


