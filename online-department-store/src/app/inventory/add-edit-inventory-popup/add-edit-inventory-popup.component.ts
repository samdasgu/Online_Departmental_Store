import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../shared/model/inventory.model';

@Component({
  selector: 'app-add-edit-inventory-popup',
  templateUrl: './add-edit-inventory-popup.component.html',
  styleUrls: ['./add-edit-inventory-popup.component.css']
})
export class AddEditInventoryPopupComponent implements OnInit {
  
  headerText : string;
  isAdd : boolean;
  errorMsg : string;
  @ViewChild('addEditInventory',{static: true}) modalWindow : ElementRef;
  inventoryDTO : Inventory = new Inventory(null,null,null,null);

  
  constructor(private invService: InventoryService) {}

  ngOnInit(): void {
    this.errorMsg = '';
  }

  showModal(isAdd : boolean) {
    this.isAdd = isAdd;
    this.headerText = this.isAdd ? "Add Inventory" : "Edit Inventory";
    $(this.modalWindow.nativeElement).modal('show');
  }

  getButtonText() {
    return this.isAdd ? "Add" : "Edit";
  }

  saveInventory() {
    /* Validation logic */
    if(this.isAdd && this.invService.findInventory(this.inventoryDTO.inventoryCode)) {
        this.errorMsg = "Inventory Code already exists";
        return;
    }

    this.invService.saveInventory(this.inventoryDTO);

    this.inventoryDTO = new Inventory(null,null,null,null);
    $(this.modalWindow.nativeElement).modal('hide');
  }

  checkNullOrEmpty(inputString: any) { 
    return (inputString === null ||  
      inputString === undefined || 
      inputString === '');
  } 

  cancel() {
    this.errorMsg = '';
    this.inventoryDTO = new Inventory(null,null,null,null);
  }

  onDestroy() {
    console.log("Destroy called");
  }

}
