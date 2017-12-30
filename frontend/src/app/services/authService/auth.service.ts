import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //map operator om met observables te werken
import { tokenNotExpired } from 'angular2-jwt'
import { GlobalVariable } from '../global'

@Injectable()
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http: Http) { }

  registerUser(user){
    let headers = new Headers();

    headers.append('Content-Type','application/json');
    return this.http.post(GlobalVariable.base_url+'user/registreren', user, {headers:headers})
        .map(response => response.json());

    //die user/registreren slaagt op routes-->user.js dat is de user en daarin
    //zit een post methode registreren en dat is dat tweede deel
    //hier zit dus de verbintenis met de backend
  }

  authenticateUser(user){
    let headers = new Headers();

    headers.append('Content-Type','application/json');
    return this.http.post(GlobalVariable.base_url+'user/authenticeren', user, {headers:headers})
        .map(response => response.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);

    headers.append('Content-Type','application/json');
    return this.http.get(GlobalVariable.base_url+'user/profiel', {headers:headers})
        .map(response => response.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }


  storeUserData(token, user){
    console.log("methode storeUserData in authservice")
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
