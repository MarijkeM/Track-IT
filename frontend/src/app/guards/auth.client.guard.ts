/**
 * Created by Marijke on 18/02/2018.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

@Injectable()
export class AuthGuardClient implements CanActivate{

    constructor(private authService: AuthService,
                private router:Router){
    }

    canActivate(){
        if(this.authService.loggedInAs("client")){
            return true;
        }else{
            this.router.navigate(['/login']);
        }
    }
}