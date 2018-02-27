import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService/auth.service'
import {FreightService} from '../../services/freightService/freight.service'
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from "../../services/orderService/order.service";


@Component({
    selector: 'app-home-driver',
    templateUrl: './home-driver.component.html',
    styleUrls: ['./home-driver.component.css']
})
export class HomeDriverComponent implements OnInit {
    user: any;
    status: any;
    orders: Object

    constructor(private orderService: OrderService) {
    }


    ngOnInit() {
        this.getOrders();
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    getOrders(){
        this.orderService.getAllOrders().subscribe(orders => {
                this.orders = orders;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    inladen(index){
        this.orders[index].status = "loading";
    }

    vertrek(index){
        this.orders[index].status = "departed";
    }

    aankomst(index){
        this.orders[index].status = "arrived";
    }
}
