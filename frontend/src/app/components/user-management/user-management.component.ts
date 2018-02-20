import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
    users: Object;
    selectedUser: any;
    selectedUserIndex: any;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessage: FlashMessagesService) {
    }

    ngOnInit() {
        this.selectedUser = null;
        this.selectedUserIndex = 0;
        this.getAllUsers();
        this.changeSelectedUser();
    }

    changeSelectedUser() {
        console.log("changeSelectedUser");
        this.selectedUser = this.users[this.selectedUserIndex];
        console.log(JSON.stringify(this.selectedUser));
    }

    getAllUsers(){
        this.authService.getAllUsers().subscribe(users => {
                this.users = users;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    updateUser() {
        console.log(this.selectedUser);
        this.authService.modifyUser(this.selectedUser).subscribe(data => {
            if (data.success) {
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-success m-3',
                        timeout: 3000
                    });
            } else {
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-danger m-3',
                        timeout: 3000
                    });
            }
        });
    }

    deleteUser() {
        this.authService.deleteUser(this.selectedUser._id).subscribe(data => {
            if (data.success) {
                this.getAllUsers();
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-success m-3',
                        timeout: 3000
                    });
            } else {
                this.flashMessage.show(data.msg,
                    {
                        cssClass: 'alert-danger m-3',
                        timeout: 3000
                    });
            }
        });
    }
}
