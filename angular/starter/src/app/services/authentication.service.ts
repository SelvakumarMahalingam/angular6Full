import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CommonService } from './common.service';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http, private router: Router) { }

  login(data) {
    var respData = CommonService.NoauthReq('/user/login');
    return this.http.post(respData.url, data, respData.headers).pipe(map(res => res.json()));
  }

  getData() {
    return 1;
    // return this.http.get("http://127.0.0.1:3000/flowers").pipe(map(res => res.json()));
  }


  // logout(data) {
  //   var resData = CommonService.authReq('/user/logout');
  //   return this.http.post(resData.url, data, resData.RequestOptions).map((res: Response) => res.json());
  // }

  forgotpassword(data) {

    var respData = CommonService.NoauthReq('/user/forgot_password/' + data.email);
    return this.http.post(respData.url, data, respData.headers).pipe(map(res => res.json()));
  }

  // changePassword(data) {
  //   var resData = CommonService.fwdauthReq('/user/change_password');
  //   return this.http.put(resData.url, data, resData.headers).pipe(map(res => res.json()));
  // }
  // this below functions are used to auth guard
  getToken() {
    return localStorage.getItem('authToken');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    this.router.navigate(['/session/signin']);

    // var resData = CommonService.authReq('/user/logout');
    // return this.http.post(resData.url, data, resData.headers).pipe(map(res => res.json()));

  }
}
