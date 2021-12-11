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
 
    this.HForgotForm = this.fb.group({
    
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.maxLength(40)
      ]],
      agree:[false,[
        Validators.requiredTrue
      ]]});
    
      this.light = this.sharingService.getData();
  }



  get email(){
    return this.HForgotForm.get('email');
  }

  get agree(){
    return this.HForgotForm.get('agree');
  }


  submit(){
    console.log(this.HForgotForm.value);
    Swal.fire({  
      icon: 'success',  
      title: 'Email Sent',  
      text: 'Please check your inbox',  
});
  this.HForgotForm.reset({
    email: '',
    password: '',
  });
 
}

}
