import { LogMessages } from './../../models/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  logMessages: string[] = LogMessages;

  constructor() { }

  ngOnInit(): void {
  }

}
