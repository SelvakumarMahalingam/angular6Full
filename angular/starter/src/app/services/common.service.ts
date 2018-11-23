import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  static rootUrl: string = environment.host;
  private rootUrl = this.rootUrl;
  static cdnUrl = environment.cdnhost;
  private cdnUrl = this.cdnUrl;

  constructor() { }

  static getrootUrl() {
    return this.rootUrl;
  }

  static authReq(url) {
    const headers = new Headers({ 'Accept': 'application/json', 'authorization': localStorage.getItem('authToken') });
    const reqOptions = new RequestOptions({ headers: headers });
     return {
      url: this.rootUrl + url,
      headers: reqOptions
     }
}
 static NoauthReq(url: string) {
    const headers = new Headers({ 'Accept': 'application/json' });
    const reqOptions = new RequestOptions({ headers: headers });
    return {
      url: this.rootUrl + url,
      headers: reqOptions
    };
  }

  // static deleteFile(url: string) {
  //   var headers = new Headers({ 'Content-Type': 'application/json', 'authorization': localStorage.getItem('authToken') });
  //   var reqOptions = new RequestOptions({ headers: headers });
  //   //headers.append('Content-Type', 'multipart/form-data');
  //   return {
  //     url: this.cdnUrl + url,
  //     RequestOptions: reqOptions
  //   }
  // }

}
