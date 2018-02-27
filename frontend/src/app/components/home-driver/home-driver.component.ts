import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service'
import {FreightService} from '../../services/freightService/freight.service'
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-home-driver',
    templateUrl: './home-driver.component.html',
    styleUrls: ['./home-driver.component.css']
})
export class HomeDriverComponent implements OnInit {
    freights: any[];
    user: any;
    closeResult: string;

    constructor(private authService: AuthService,
                private freightService: FreightService,
                private router: Router,
                private flashMessage: FlashMessagesService,
                private modalService: NgbModal) {
    }


    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            console.log("gebruiker: " + JSON.stringify(profile.user));
                this.user = profile.user;
                this.authService.setUser(profile.user);
                console.log(profile.user._id);
                this.getFreights(profile.user._id)
            },
            err => {
                console.log(err);
                return false;
            });
    }

    getFreights(driverId){
        console.log("getFreights");
        this.freightService.getFreightsFromDriver(driverId).subscribe(freights => {
                this.freights = freights.freight;
                console.log("freigts:" + JSON.stringify(this.freights));
            },
            err => {
                console.log(err);
                return false;
            });
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }



}
