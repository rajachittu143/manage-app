import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  OAUTH_CLIENT = 'dltk';
  OAUTH_SECRET = 'dltk_auth'

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.OAUTH_CLIENT + ':' + this.OAUTH_SECRET)
      // Authorization: 'Basic ' + 'ZGx0azpkbHRrX2F1dGg='
    })
  };



  // public signin(loginData: any) {
  //   const body = new HttpParams()
  //     .set('username', loginData.username)
  //     .set('password', loginData.password)
  //     .set('grant_type', 'password')
  //     .set('client_id', 'dltk');

  //   return this.http.post<any>(`${environment.signin}`, body, this.HTTP_OPTIONS);
  // }


  // public signup(body: any) {
  //   return this.http.post<any>(`${environment.signup}`, body);
  // }

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
