import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../authService/auth.service'
import { GlobalVariable } from '../global'

@Injectable()
export class TaskService {
    task:any;
    authToken: any;

  constructor(private http: Http,
  private authService: AuthService) { }

  getTasks(){
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');

    return this.http.get(GlobalVariable.base_url+'task/alleTaken', {headers:headers})
        .map(response => response.json());
  }
}
