import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  OAUTH_CLIENT = 'dltk';
  OAUTH_SECRET = 'dltk_auth'

  // public signin(loginData: any) {
  //   const body = new HttpParams()
  //     .set('username', loginData.username)
  //     .set('password', loginData.password)
  //     .set('grant_type', 'password')
  //     .set('client_id', 'dltk');

  //   return this.http.post<any>(`${environment.signin}`, body, this.HTTP_OPTIONS);
  // }


  public signin(bodyData: any) {
    return this.http.post<any>(`login/verifyuser`,bodyData);
  }

  // public user(token:any) {

  //   var  HTTP_OPTIONS_USER = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'AuthenticationToken': token,
  //     })
  //   };

  //   return this.http.post<any>(`${environment.user}`, '',HTTP_OPTIONS_USER);
  // }
}
