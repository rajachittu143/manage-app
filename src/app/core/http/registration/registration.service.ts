import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private http: HttpClient) { }

  insertMaster(body:any): Observable<any> {
    return this.http.post<any>(`${environment.insertMaster}`, body);
  }

}