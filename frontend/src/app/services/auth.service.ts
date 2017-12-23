import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //map operator om met observables te werken

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    const url = "http://localhost:3000/";
    return this.http.post(url+'user/registreren', user, {headers:headers})
        .map(response => response.json());
  }
}
