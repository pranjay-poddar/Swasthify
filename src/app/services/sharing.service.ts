import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private light: string = "light";

  setData(light: string) {
    this.light = light;
  }

  getData() {
    return this.light;
    //return "dark";
  }

  navToElement(el: any): void {    
    const element = document.getElementById(el);
    element ? element.scrollIntoView({block: "center", behavior: "smooth" }) : null;
  }

  constructor() { }
}
