import { OrderService } from './../../services/order.service';
import { OrderDetails, Bread } from './../../models/constants';
import { Ingredient } from './../../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: Ingredient[] = OrderDetails;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    OrderDetails.push(Bread)
  }

  confirmOrder() {
    this.orderService.order().catch((error) => this.orderService.catchError(error));
  }

  cancelOrder() {
    this.orderService.reset();
  }

  get processStatus(): boolean {
    return this.orderService.isProcessing;
  }

}
