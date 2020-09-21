import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-search/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createOrder(mobileno: HTMLInputElement) {
    var orderId: String = this.orderService.createNewOrder(mobileno.value);
    this.router.navigate(['customer',orderId, true]);
  }

}
