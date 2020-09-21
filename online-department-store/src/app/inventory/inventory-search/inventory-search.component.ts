import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AddEditInventoryPopupComponent } from '../add-edit-inventory-popup/add-edit-inventory-popup.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-search',
  templateUrl: './inventory-search.component.html',
  styleUrls: ['./inventory-search.component.css']
})
export class InventorySearchComponent implements OnInit {

  @ViewChild('popup',{static: true}) addEditInventoryComponent : AddEditInventoryPopupComponent;
  @Output() onClickSearch = new EventEmitter<string>();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  search(nameSearchString: HTMLInputElement) {
    this.onClickSearch.emit(nameSearchString.value);
  }

  addInventory() {
    this.addEditInventoryComponent.showModal(true);
  }
}
