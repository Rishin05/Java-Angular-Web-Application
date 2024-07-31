import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Phonecase } from './phonecase';
import { EventEmitter } from '@angular/core';

const restUrl = '/api/phonecases';

@Injectable({
  providedIn: 'root'
})
export class PhonecaseService {

  constructor(private http:HttpClient) { }
  
  onPhonecaseAdded = new EventEmitter<Phonecase>();
  
  getAll(): Observable<Phonecase[]> {
	  return this.http.get<Phonecase[]>(restUrl);
	  
  }
  create(data:any):Observable<any> {
	  return this.http.post(restUrl,data);
  }
  
  delete(id: number): Observable<any> {
    return this.http.delete(`${restUrl}/${id}`);
  }
}
