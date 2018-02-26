import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service'
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: String;
    password: String;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessage: FlashMessagesService) {
    }

    ngOnInit() {
    }

    onLoginSubmit() {
        console.log("onLoginSubmit()");
        const user = {
            email: this.email,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-success m-3',
                        timeout: 3000
                    });
                this.router.navigate(['home']);
            } else {
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-danger m-3',
                        timeout: 3000
                    });
                this.router.navigate(['/login']);
            }
        });
    }
}
