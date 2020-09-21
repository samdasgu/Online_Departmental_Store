import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryListItemComponent } from './inventory/inventory-list/inventory-list-item/inventory-list-item.component';
import { InventorySearchComponent } from './inventory/inventory-search/inventory-search.component';
import { InventoryService } from './inventory/inventory.service';
import { AddEditInventoryPopupComponent } from './inventory/add-edit-inventory-popup/add-edit-inventory-popup.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderSearchComponent } from './customer/order-search/order-search.component';
import { OrderListComponent } from './customer/order-search/order-list/order-list.component';
import { OrderListItemComponent } from './customer/order-search/order-list/order-list-item/order-list-item.component';
import { OrderSummaryComponent } from './customer/order-summary/order-summary.component';
import { OrderDetailsComponent } from './customer/order-summary/order-details/order-details.component';
import { OrderService } from './customer/order-search/order.service';


const appRoutes : Routes = [
  {path: '', component: InventoryComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:orderId/:isCreateOrder', component: OrderSummaryComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventorySearchComponent,
    InventoryListComponent,
    InventoryListItemComponent,
    AddEditInventoryPopupComponent,
    HeaderComponent,
    CustomerComponent,
    OrderSearchComponent,
    OrderListComponent,
    OrderListItemComponent,
    OrderSummaryComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InventoryService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
