import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Inventory } from '../../shared/model/inventory.model';
import { AddEditInventoryPopupComponent } from '../../add-edit-inventory-popup/add-edit-inventory-popup.component';

@Component({
  selector: 'app-inventory-list-item',
  templateUrl: './inventory-list-item.component.html',
  styleUrls: ['./inventory-list-item.component.css']
})
export class InventoryListItemComponent implements OnInit {

  @Input("inventory") inventoryListItem : Inventory;
  @ViewChild("popup") addEditInventoryPopupComponent : AddEditInventoryPopupComponent;

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.addEditInventoryPopupComponent.showModal(false);
    this.addEditInventoryPopupComponent.inventoryDTO = JSON.parse(JSON.stringify(this.inventoryListItem));
  }

}
