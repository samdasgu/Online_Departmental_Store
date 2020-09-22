import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderSummaryComponent } from './customer/order-summary/order-summary.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'inventory', pathMatch: 'full'},
  {path: 'inventory', component: InventoryComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:orderId/:isCreateOrder', component: OrderSummaryComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}