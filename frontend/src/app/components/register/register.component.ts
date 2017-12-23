import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashmessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    console.log("register component geladen");
  }

  onRegisterSubmit(){
    console.log("Op registreren geklikt");

    const user = {
      firstName: this.firstName, //de eerste firstName is zelf gekozen, de laatste komt van de form
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    /*testen of alle velden zijn ingevuld*/
    if(!this.validateService.validateRegister(user)){
      console.log("Niet alle velden zijn ingevuld");
      this.flashmessage.show("Gelieve alle velden in te vullen",
          {cssClass:'alert-danger m-3',timeout:3000});
      return false;
    }

    /*testen of e-mail juiste vorm is*/
      if(!this.validateService.validateEmail(user.email)){
        console.log("E-mail is niet correct");
        this.flashmessage.show("E-mailadres is niet correct",
            {cssClass:'alert-danger m-3',timeout:3000});
        return false;
      }


    //User registreren via de auth service (die het weer haalt van routes/user.js)
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashmessage.show(data.msg,
            {cssClass:'alert-success m-3',timeout:3000});
        this.router.navigate(['/login']);
      }else{
        this.flashmessage.show(data.msg,
            {cssClass:'alert-danger m-3',timeout:3000});
        this.router.navigate(['/register']);
      }
    });



  }

}
