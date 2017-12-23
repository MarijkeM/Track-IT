import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    console.log("register component");
    console.log(this.firstName);
  }

  onRegisterSubmit(){
    console.log("Registreren gelukt");
  }

}
