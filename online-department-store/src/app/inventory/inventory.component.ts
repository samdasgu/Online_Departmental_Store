import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { AddEditInventoryPopupComponent } from './add-edit-inventory-popup/add-edit-inventory-popup.component';
import { Inventory } from './shared/model/inventory.model';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{

  searchString: string;
  inventoryList : Inventory [];

  constructor(private invService : InventoryService) { }

  ngOnInit(): void {
    //this.inventoryList = this.invService.getInventoryList();
  }

  setSearchString(searchString: string) {
    this.searchString = searchString;
  }
}
