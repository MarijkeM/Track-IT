import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; //map operator om met observables te werken
import { tokenNotExpired } from 'angular2-jwt'
import { GlobalVariable } from '../global'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http: HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders()
        .set('Content-Type','application/json');

    return this.http.post<any>(GlobalVariable.base_url+'user/registreren',
                          user,
                          {headers});

    /*
    //die user/registreren slaagt op routes-->user.js dat is de user en daarin
    //zit een post methode registreren en dat is dat tweede deel
    //hier zit dus de verbintenis met de backend
    */
  }

  authenticateUser(user){
    let headers = new HttpHeaders()
        .set('Content-Type','application/json');

    return this.http.post<any>(GlobalVariable.base_url+'user/authenticeren',
                              user,
                              {headers});
  }

  getProfile(){
    console.log("***auth.service getProfile()");
    this.loadToken();
    let headers = new HttpHeaders()
        .set('Authorization',this.authToken)
        .append('Content-Type','application/json');


    return this.http.get<any>(GlobalVariable.base_url+'user/profiel',
                            {headers});
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    return this.authToken = token;
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
