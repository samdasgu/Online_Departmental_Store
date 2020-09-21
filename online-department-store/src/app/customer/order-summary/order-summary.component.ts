import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/inventory/shared/model/inventory.model';
import { OrderItem } from '../model/order.model';
import { OrderService } from '../order-search/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  orderId: string;
  order: OrderItem;
  @Input() isCreateOrder: string;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.isCreateOrder = this.route.snapshot.params['isCreateOrder'];
    this.order = this.orderService.getOrdersByOrderIdAndMobileNumber(this.orderId,'')[0];
  }

}
