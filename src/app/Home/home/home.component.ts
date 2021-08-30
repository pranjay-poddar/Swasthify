import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   x="dark";
  light = "" ;
  toggleNav(){
    if(this.light){
      this.light = "";
    this.x = "light";
    }
    else{
      this.light = "dark";
    this.x="dark";
    }
    if(this.x=="dark"){
      this.x="light";
    }
    else{
      this.x="dark";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
