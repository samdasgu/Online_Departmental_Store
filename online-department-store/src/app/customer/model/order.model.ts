import { Inventory } from 'src/app/inventory/shared/model/inventory.model';

export class OrderItem {

    private static orderList: OrderItem[] = [
        new OrderItem('CUST01','8582984319',1010.50, new Date("2020-06-21"),
        [
            new Inventory('A001', 'Corn flakes', 2, 12.00),
            new Inventory('A002', 'Dettol', 2, 15.00),
            new Inventory('A003', 'Cheese', 3, 40.00)
        ]
        ),
        new OrderItem('CUST02','9477010515',520.50, new Date("2020-06-22"),
        [
            new Inventory('A002', 'Dettol', 2, 15.00),
            new Inventory('A003', 'Cheese', 3, 40.00)
        ]
        )
    ]

    constructor(
        public orderId: string,
        public mobileNumber: string,
        public amount: number,
        public orderDate: Date,
        public items: Inventory[]
    ) {}

    static getAllOrders() {
        return this.orderList;
    }
}