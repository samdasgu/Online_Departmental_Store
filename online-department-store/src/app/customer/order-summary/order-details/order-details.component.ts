import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from 'src/app/inventory/shared/model/inventory.model';
import { InventoryService } from 'src/app/inventory/inventory.service';
import { Router } from '@angular/router';
import { OrderService } from '../../order-search/order.service';
import { OrderItem } from '../../model/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() items: Inventory[];
  @Input() orderId: string;
  @Input() isCreateOrder: string;
  inventoryList: Inventory[];
  newItem: Inventory = new Inventory('','',0,0);
  isQtyExceedsInventory: boolean = false;

  constructor(private inventoryService: InventoryService, 
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.inventoryList = this.inventoryService.getInventoryList();
    console.log(this.isCreateOrder);
  }

  onChangeInventoryCode() {
    var inventory : Inventory = this.inventoryService
    .findInventory(this.newItem.inventoryCode);
    this.newItem.inventoryName = inventory.inventoryName;
    this.newItem.inventoryUnitPrice = inventory.inventoryUnitPrice;
  }

  onChangeUnitPrice() {
    var inventory : Inventory = this.inventoryService
    .findInventory(this.newItem.inventoryCode);
    this.isQtyExceedsInventory = this.newItem.inventoryQty > inventory.inventoryQty;
  }

  getTotal() {
    return this.items.reduce(
      (total,item) => total + (item.inventoryQty * item.inventoryUnitPrice),0
    );
  }

  onAddNewItem() {
    this.orderService.addItemToOrder(this.orderId, this.newItem);
    this.newItem = new Inventory('','',0,0);
  }

  onCancel() {
    this.orderService.deleteOrder(this.orderId);
    this.router.navigate(['customer']);
  }

  onCheckOut() {
    var order : OrderItem = this.orderService.getOrdersByOrderIdAndMobileNumber(this.orderId,'')[0];
    order.amount = this.getTotal();
    order.items.forEach(
      (item) => {
        this.inventoryService.findInventory(item.inventoryCode).inventoryQty = 
        this.inventoryService.findInventory(item.inventoryCode).inventoryQty - item.inventoryQty;
      }
    )

    this.newItem = new Inventory('','',0,0);
    this.router.navigate(['customer']);
  }

}
