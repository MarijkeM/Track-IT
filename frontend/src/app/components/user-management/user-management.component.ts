import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from "../../services/validateService/validate.service";

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
    users: Object;
    selectedUser: any;
    selectedUserIndex: any;

    constructor(private validateService: ValidateService,
                private flashmessage: FlashMessagesService,
                private authService: AuthService,
                private router: Router,) {
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
        /*testen of e-mail juiste vorm is*/
        if(!this.validateService.validateEmail(this.selectedUser.email)){
            this.flashmessage.show("E-mail is not correct",
                {cssClass:'alert-danger m-3',timeout:3000});
            return false;
        }
        this.authService.modifyUser(this.selectedUser).subscribe(data => {
            if (data.success) {
                this.flashmessage.show(data.msg,
                    {
                        cssClass: 'alert-success m-3',
                        timeout: 3000
                    });
            } else {
                this.flashmessage.show(data.msg,
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
                this.flashmessage.show(data.msg,
                    {
                        cssClass: 'alert-success m-3',
                        timeout: 3000
                    });
            } else {
                this.flashmessage.show(data.msg,
                    {
                        cssClass: 'alert-danger m-3',
                        timeout: 3000
                    });
            }
        });
    }
}
