/**
 * Created by Marijke on 18/02/2018.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/authService/auth.service';

@Injectable()
export class AuthGuardDriver implements CanActivate{

    constructor(private authService: AuthService,
                private router:Router){
    }

    canActivate(){
        console.log("ingelogd als driver?: " + this.authService.loggedInAs("driver"))
        if(this.authService.loggedInAs("driver")){

            return true;
        }else{
            this.router.navigate(['/login']);
        }
    }
}