import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from './order.service';
import { OrderItem } from '../model/order.model';

@Component({
  selector: 'app-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {

  @ViewChild('orderId') orderId : ElementRef;
  @ViewChild('mobileNo') mobileNo : ElementRef;

  orderList : OrderItem[]

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderList = this.orderService.getOrdersByOrderIdAndMobileNumber();
  }

  search() {
    var orderId : string = this.orderId.nativeElement.value;
    var mobileNo : string = this.mobileNo.nativeElement.value;
    this.orderList = this.orderService.getOrdersByOrderIdAndMobileNumber(orderId, mobileNo);
  }

}
