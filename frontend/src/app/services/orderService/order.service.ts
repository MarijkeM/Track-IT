import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { GlobalVariable } from '../globalOrder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '..//authService/auth.service';

@Injectable()
export class OrderService {
    authToken: any;
    user: any;

  constructor(private authService: AuthService, private http: HttpClient) { }

    getAllOrders(){
        console.log("***order.service getAllOrders()");

        return this.http.get<any>(GlobalVariable.base_url+'order/getAllOrders');
    }
}
