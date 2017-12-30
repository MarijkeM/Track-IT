import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt'
import { AuthService } from '../authService/auth.service'

@Injectable()
export class TaskService {
    task:any;
    authToken: any;

  constructor(private http: Http,
  private authService: AuthService) { }

  getTasks(){
    const url = "http://localhost:3000/";
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');

    return this.http.get(url+'task/alleTaken', {headers:headers})
        .map(response => response.json());
  }
}
