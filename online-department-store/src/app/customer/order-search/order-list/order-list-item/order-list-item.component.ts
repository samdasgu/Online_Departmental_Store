import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/customer/model/order.model';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input() displayedOrderItem : OrderItem;

  constructor() { }

  ngOnInit(): void {
  }

}
