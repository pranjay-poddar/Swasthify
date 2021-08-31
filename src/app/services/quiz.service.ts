import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  
  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'assets/data/covid.json', name: 'Covid' },
      { id: 'assets/data/mental.json', name: 'Mental' },
      { id: 'assets/data/physical.json', name: 'Physical' },
      { id: 'assets/data/eatingDisorder.json', name: 'Eating Disorder' },
    ];
  }
}
