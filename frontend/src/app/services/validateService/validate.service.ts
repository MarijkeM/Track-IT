import { Injectable } from '@angular/core';
import {isNullOrUndefined} from "util";

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    //console.log("validateRegister in validateService");
    if(user.firstName == null || user.lastName == null || user.email == null || user.password == null){
      return false;
    }else{
      return true;
    }
  }

    validateEmail(email){
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexEmail.test(email);
    }

}
