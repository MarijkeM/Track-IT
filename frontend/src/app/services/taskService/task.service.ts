import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { AuthService } from '../authService/auth.service'
import { GlobalVariable } from '../global'

@Injectable()
export class TaskService {
    task:any;
    authToken: any;

  constructor(
  private authService: AuthService,
  private http: HttpClient) { }

  getTasks(){
    const headers = new HttpHeaders()
        .set('Authorization',this.authToken)
        .append('Content-Type','application/json');
    this.authService.loadToken();

    return this.http.get<any>(GlobalVariable.base_url+'task/alleTaken', {headers})
  }
}
