import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'


@Component({
  selector: 'app-home-driver',
  templateUrl: './home-driver.component.html',
  styleUrls: ['./home-driver.component.css']
})
export class HomeDriverComponent implements OnInit {
user:Object;

   constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }
              
              
    ngOnInit() {
      this.authService.getProfile().subscribe(profile => {
              console.log("profiel:" + JSON.stringify(profile));
              this.user = profile.user;
              console.log(this.user);
          },
          err => {
              console.log(err);
              return false;
          });
  }

}
