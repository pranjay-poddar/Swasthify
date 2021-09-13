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

  constructor() { }
}
