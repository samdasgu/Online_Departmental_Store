import { OrderItem } from '../model/order.model';
import { Inventory } from 'src/app/inventory/shared/model/inventory.model';

export class OrderService {


    getOrdersByOrderIdAndMobileNumber(orderId: string = '', mobileNo : string = '') {
        var orderList : OrderItem[] = OrderItem.getAllOrders();
        if(orderId !== '' && mobileNo === '') {
            return orderList.filter(orderItem => orderItem.orderId.toUpperCase().indexOf(orderId.toUpperCase())>=0 );
        }

        if(orderId === '' && mobileNo !== '') {
            return orderList.filter(orderItem => orderItem.mobileNumber.indexOf(mobileNo)>=0 );
        }

        if(orderId !== '' && mobileNo !== '') {
            return orderList.filter(orderItem => (orderItem.orderId.toUpperCase().indexOf(orderId.toUpperCase())>=0
                && orderItem.mobileNumber.indexOf(mobileNo)>0));
        }

        return orderList;
    }

    addItemToOrder(orderId: string, item: Inventory) {
        var order : OrderItem = this.getOrdersByOrderIdAndMobileNumber(orderId, '')[0];
        var alreadyExistingItem : Inventory = order.items.find((i) => i.inventoryCode === item.inventoryCode);
        if(alreadyExistingItem !== undefined) {
            alreadyExistingItem.inventoryQty = alreadyExistingItem.inventoryQty 
            + Number.parseInt(item.inventoryQty.toString());
        } else {
            order.items.push(item);
        }
    }

    createNewOrder(mobileNo: string) {
        var orderList : OrderItem[] = this.getOrdersByOrderIdAndMobileNumber('','');
        var orderId : String = orderList[orderList.length-1].orderId;
        var newOrderId : String = 'CUST' + this.pad2((parseInt(orderId.substr(4)) + 1));
        orderList.push(new OrderItem(newOrderId.toString(),mobileNo,0,new Date(),[]));
        return newOrderId;
    }

    deleteOrder(orderId: string) {
        var orderList : OrderItem[] = OrderItem.getAllOrders();
        var orderToBeDeleted : OrderItem = orderList.find(obj => obj.orderId==orderId);
        OrderItem.getAllOrders().splice(orderList.indexOf(orderToBeDeleted), 1);
    }

    pad2(number) {
        return (number < 10 ? '0' : '') + number
    }

}