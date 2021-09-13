import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  light :any;

  toggleNav(){
    if(this.light == "light"){
      this.light = "dark";
    }
    else{
      this.light = "light";
    }
    
    this.sharingService.setData(this.light);
  }
  constructor(private router:Router,
    private sharingService:SharingService){}


  ngOnInit(): void {
    this.light = "light";
    this.light = this.sharingService.getData();
  }
}
