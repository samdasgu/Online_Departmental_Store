import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../model/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input() filteredOrderList : OrderItem[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
