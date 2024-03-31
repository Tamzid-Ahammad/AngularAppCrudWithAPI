import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Designation, } from '../model/data';


@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }




  apiUrl: string = "https://localhost:7217/api/Designations";

  public GetDesignations(): Observable<Designation[]> {

    return this.http.get<Designation[]>(this.apiUrl);
  }
  public GetDesignation(id:number): Observable<Designation> {

    return this.http.get<Designation>(this.apiUrl+'/'+id);
  }
  public SaveDesignation(designation: any): Observable<any> {

    return this.http.post(this.apiUrl, JSON.stringify(designation), this.httpOptions);
  }
  public UpdateDesignation(designation: Designation): Observable<Designation> {

    return this.http.put<Designation>(this.apiUrl + '/' + designation.id, JSON.stringify(designation), this.httpOptions);
  }
  public DeleteDesignation(id: number): Observable<any> {

     return this.http.delete(this.apiUrl + '/' + id);
  }
}
