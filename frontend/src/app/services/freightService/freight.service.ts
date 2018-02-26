import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GlobalVariable } from '../globalFreight';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authService/auth.service';

@Injectable()
export class FreightService {
  user: any;

  constructor(private authService: AuthService, private http: HttpClient) { }

  getFreightsFromDriver(driverId){
    console.log("***freight.service getFreightsFromDriver()");

    let headers = new HttpHeaders()
        .set('Content-Type','application/json');

    return this.http.get<any>(GlobalVariable.base_url+'freight/allFreightsfromDriver/'+driverId,
        {headers});
  }
}
