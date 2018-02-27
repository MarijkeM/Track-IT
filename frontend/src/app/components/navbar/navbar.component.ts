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
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log("user van localstorage: " + this.user)
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
