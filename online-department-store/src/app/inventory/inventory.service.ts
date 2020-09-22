import { Inventory } from './shared/model/inventory.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {
    inventoryList: Inventory[] = [
        new Inventory('A001', 'Corn flakes', 4, 20.00),
        new Inventory('A002', 'Dettol', 50, 35.00),
        new Inventory('A003', 'Cheese', 23, 40.00),
        new Inventory('A004', 'Milk', 13, 10.00),
      ];

    constructor(private http: HttpClient) {}

    getInventoryList() {
        return this.inventoryList;
    }

    saveInventory(inventoryDTO: Inventory) {
        this.http.post('http://localhost:8090/online-department-store/inventory',
            inventoryDTO,
            {responseType: 'text'})
        .subscribe(
            responseData => {
                //Do nothing
            }
        );
    }

    findInventory(invCode: string) {
        return this.inventoryList.find(inv => inv.inventoryCode === invCode);
    }
}