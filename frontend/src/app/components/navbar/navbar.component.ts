import {Component, OnInit, OnChanges} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service'
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
    user: Object;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessage: FlashMessagesService) {
    }

    ngOnChanges(){

    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this.user = profile.user;
                this.authService.setUser(profile.user)
            },
            err => {
                console.log(err);
                return false;
            });
    }

    onLogoutClick() {
        this.user = null;
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 4000
        });

        this.router.navigate(['login']);
        return false;
    }
}
