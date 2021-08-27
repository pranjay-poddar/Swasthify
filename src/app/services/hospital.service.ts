import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hospitals } from '../models/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseUrl = "http://localhost:8080/api/v1/";
  constructor(private httpClient : HttpClient) { }
  //sign up hospital
  signUpHospital(HSForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"register-hospital", HSForm);
  }
  //sign in hospital
  signInHospital(HLoginForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"login-hospital", HLoginForm);
  } 
  //get hosptial by id
  getHospById(id : number) : Observable<Hospitals>{
    return this.httpClient.get<any>(this.baseUrl+"details/"+id);
  }
}
