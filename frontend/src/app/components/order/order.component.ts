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

  constructor(private orderService: OrderService,
              private router:Router) { }

  ngOnInit() {
      this.orderService.getAllOrders().subscribe(orders => {
          this.orders = orders;
          console.log(this.orders);
      },
      err => {
          console.log(err);
          return false;
      });
  }

}
