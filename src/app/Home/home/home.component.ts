import { Component, OnInit } from '@angular/core';
import { Dark } from 'src/app/shared/darkmode';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  /*var script-d = document.createElement('script-d');
    script-d.type = 'text/javascript';

  script-d.src="https://code.iconify.design/1/1.0.4/iconify.min.js";
    document.body.appendChild(script-d);*/
y:Dark= new Dark();

   x="dark";
  light = "" ;
  toggleNav(){
    if(this.light){
      this.light = "";
    this.x = "light";
    this.y.dark = true;
    }
    else{
      this.light = "dark";
    this.x="dark";
    this.y.dark= false;
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
