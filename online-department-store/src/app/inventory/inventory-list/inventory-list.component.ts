import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef, DoCheck, AfterContentInit } from '@angular/core';
import { Inventory } from '../shared/model/inventory.model';
import { InventoryService } from '../inventory.service';
import { InventorySearchComponent } from '../inventory-search/inventory-search.component';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnChanges, OnInit {

  @Input() filterCriteria : string;
  inventoryList : Inventory [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryList = this.inventoryService.getInventoryList();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.inventoryList = this.inventoryService.getInventoryList();
    if(this.filterCriteria !== undefined) {
      this.inventoryList = this.inventoryList
      .filter(i => i.inventoryName.toUpperCase().indexOf(this.filterCriteria.toUpperCase())>=0);
    }   
  }
}
