import { CookingDegree } from '../models/cookingDegree';
import { OrderDetails, Bread, LogMessages, Ingredients, Meats, Extras } from './../models/constants';
import { DelayService } from './delay.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cookingDegree: CookingDegree | undefined;
  isProcessing: boolean = false;

  constructor(
    private delayService: DelayService,
  ) { }

  async order() {
    LogMessages.length = 0;

    if (!OrderDetails.find(item => Meats.includes(item))) {
      throw new Error("Please select a meat type.");
    }

    this.isProcessing = true;
    LogMessages.push("Order taken, please wait. You can not place a new order while an order is in process.");
    this.delayService.delay(1000);

    this.checkStock()
      .then(() => this.prepareMeal()
        .then(() => this.setTray()
          .then(() => this.serve()
            .then(() => this.reset())
            .catch((error) => this.catchError(error)))
          .catch((error) => this.catchError(error)))
        .catch((error) => this.catchError(error)))
      .catch((error) => this.catchError(error));
  }

  catchError(error: Error) {
    this.isProcessing = false;
    LogMessages.push(error.message);
  }

  reset() {
    OrderDetails.length = 0;
    OrderDetails.push(Bread);
    this.cookingDegree = undefined;
  }

  async checkStock() {
    LogMessages.push("Checking stock.");
    await this.delayService.delay(3000);
    OrderDetails.forEach(element => {
      if (!element.canOrdered) {
        throw new Error("Order cancelled. " + element.name + " is out of stock.");
      }
    });
    LogMessages.push("Stock checked. --");
  }

  async prepareMeal() {
    return Promise.all([this.checkMeatType(), this.fryPotatos(), this.prepareDrink()]);
  }

  async checkMeatType() {
    LogMessages.push("Checking meat.");
    await this.delayService.delay(1000);

    let chickenMeat = OrderDetails.find(item => item.name === "Chicken");
    if (chickenMeat) {
      await this.cookMeat(3000);
    } else {
      if (this.cookingDegree) {
        await this.cookMeat(this.cookingDegree.time)
      } else {
        throw new Error("Please select a cooking degree.")
      }
    }
  }

  async cookMeat(miliseconds: number) {
    LogMessages.push("Cooking meat.");
    await this.delayService.delay(miliseconds);
    LogMessages.push("Meat cooked. --");
    await this.makeBurger();
  }

  async makeBurger() {
    LogMessages.push("Making burger.");
    await this.delayService.delay(2000);
    OrderDetails.forEach(element => {
      if (Ingredients.includes(element) || Meats.includes(element)) {
        LogMessages.push(element.name + " added to burger.");
      }
    });
    LogMessages.push("Burger made. --");
  }

  async fryPotatos() {
    let potato = OrderDetails.find(p => p.name === "Potato")
    if (potato) {
      LogMessages.push("Frying potatos.");
      await this.delayService.delay(5000);
      LogMessages.push("Potatos fried. --");
    }
  }

  async prepareDrink() {
    let coke = OrderDetails.find(p => p.name === "Coke")
    if (coke) {
      LogMessages.push("Preparing drink.");
      await this.delayService.delay(2000);
      LogMessages.push("Drink prepared. --");
    }
  }

  async setTray() {
    LogMessages.push("Preparing serving tray.");
    await this.delayService.delay(1000);
    LogMessages.push("Burger is placed on serving tray.");
    OrderDetails.forEach(element => {
      if (Extras.includes(element)) {
        LogMessages.push(element.name + " is placed on serving tray.");
      }
    });
    LogMessages.push("Serving tray is ready to serve. --");
  }

  async serve() {
    await this.delayService.delay(1000);
    LogMessages.push("Served. --");
    LogMessages.push("Waiting for new order.");
    this.setStock();
    this.isProcessing = false;
  }

  setStock() {
    OrderDetails.forEach(element => {
      element.stock -= 1;
      if (element.stock === 0) {
        element.canOrdered = false;
      }
    });
  }
}