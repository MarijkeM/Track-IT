import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/orderService/order.service';
import { Router } from '@angular/router';
import {AuthService} from "../../services/authService/auth.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:Object;
  selectedOrder:any;
  selectedOrderId:any;

  constructor(private orderService: OrderService,
              private router:Router) {
      this.selectedOrder = null;
      this.selectedOrderId = null;
  }

  ngOnInit() {
      this.orderService.getAllOrders().subscribe(orders => {
          this.orders = orders;
      },
      err => {
          console.log(err);
          return false;
      });
  }

  changeSelectedOrder(){
      console.log("changeSelectedOrder");
      this.selectedOrder = this.orders[this.selectedOrderId];
      console.log(JSON.stringify(this.selectedOrder));
  }

}
