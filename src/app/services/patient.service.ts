import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patients } from '../models/patients';
import { TotalService } from '../models/total-service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }
  baseUrl = "http://localhost:8080/api/v2/"
  //get details
  public getTotalServices() : Observable<TotalService>{
    return this.httpClient.get<TotalService>(this.baseUrl+"all-services")
  }
  //get details by city
  public getTotalServicesByCity(city : String) : Observable<TotalService>{
    return this.httpClient.get<TotalService>(this.baseUrl+"all-services/"+city)
  }
  //register details
  public registerPatient(PSForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"register-patient", PSForm);
  }
  //sign in
  public loginPatient(PLoginForm : any) : Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"login-patient", PLoginForm);
  }
  //get patitent details by id
  public getPatient(id : number) : Observable<Patients>{
    return this.httpClient.get<Patients>(this.baseUrl+"patient-details/"+id);
  }
  //get all hospitals by city
  public getDetailsOfHospitalsByCity(city : String) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"details/"+city);
  }
  //get all hospitals by service
  public getHospitalsByService(city : String) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+"all-hospitals/"+city);
  }
}
