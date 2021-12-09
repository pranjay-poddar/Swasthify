import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChangePassword } from '../models/changePass';
import { Hospitals } from '../models/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseUrl = "https://swasthify-server.herokuapp.com/api/v1/";
  // private baseUrl = "http://localhost:8080/api/v1/";
  
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
  //change password 
  public changePassHospital(changePass : ChangePassword,id:number) : Observable<any>{
    return this.httpClient.put<any>(this.baseUrl+"details/"+id, changePass);
  }
   //Delete Hospital by id
   deleteHospital(id:number):Observable <any>{
    return this.httpClient.delete<any>(this.baseUrl+"hospital-details/"+id);
  }
  //update details of hospitals
  updateDetailsOfHospital(id : number, hospital : Hospitals) : Observable<Hospitals>{
    return this.httpClient.put<Hospitals>(this.baseUrl+"add-services/"+id, hospital);
  }
  //get details for patient dialog
  getDetailsOfHospital(id: number) : Observable<Hospitals>{
    return this.httpClient.get<Hospitals>(this.baseUrl+"hospital-details/"+id);
  }
}
