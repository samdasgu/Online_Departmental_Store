import { Inventory } from './shared/model/inventory.model';
import { EventEmitter } from '@angular/core';

export class InventoryService {
    inventoryList: Inventory[] = [
        new Inventory("A001", "Corn flakes", 4, 20.00),
        new Inventory("A002", "Dettol", 50, 35.00),
        new Inventory("A003", "Cheese", 23, 40.00),
        new Inventory("A004", "Milk", 13, 10.00),
      ];

    getInventoryList() {
        return this.inventoryList;
    }

    saveInventory(inventoryDTO : Inventory) {
        var inventory : Inventory = this.findInventory(inventoryDTO.inventoryCode);
        if(inventory === null || inventory === undefined) {
            this.inventoryList.push(inventoryDTO);
        } else {
            inventory.inventoryQty = inventoryDTO.inventoryQty;
            inventory.inventoryUnitPrice = inventoryDTO.inventoryUnitPrice;
        }
    }

    findInventory(invCode : String) {
        return this.inventoryList.find(inv => inv.inventoryCode === invCode);
    }
}