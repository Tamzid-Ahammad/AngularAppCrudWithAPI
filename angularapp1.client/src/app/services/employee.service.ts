import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Employee } from '../model/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  httpFormOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',

    })
  }


  apiUrl: string = "https://localhost:7217/api/Employees";

  public GetEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.apiUrl);
  }
  public GetEmployee(id: number): Observable<Employee> {

    return this.http.get<Employee>(this.apiUrl + '/' + id);
  }
  public SaveEmployee(employee: any): Observable<any> {

    return this.http.post(this.apiUrl, employee, this.httpOptions);
  }
  public Upload(file: any): Observable<string> {

    return this.http.post<string>("https://localhost:7217/UploadImage", file, this.httpFormOptions);
  }
  public UpdateEmployee(employee: Employee): Observable<Employee> {

    return this.http.put<Employee>(this.apiUrl + '/' + employee.id, employee, this.httpOptions);
  }
  public DeleteEmployee(id: number): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
