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
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getFreights(this.user.id)
    }

    getFreights(driverId) {
        console.log("getFreights");
        this.freightService.getFreightsFromDriver(driverId).subscribe(freights => {
                console.log("observable" + JSON.stringify(freights));
                this.freights = freights;
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
