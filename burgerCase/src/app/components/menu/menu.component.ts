import { OrderService } from './../../services/order.service';
import { CookingDegree } from '../../models/cookingDegree';
import { Ingredients, OrderDetails, Meats, CookingDegrees, Extras } from './../../models/constants';
import { Ingredient } from './../../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ingredients: Ingredient[] = Ingredients;
  extras: Ingredient[] = Extras;
  meats: Ingredient[] = Meats;
  cookingDegrees: CookingDegree[] = CookingDegrees;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addToOrder(ingredient: Ingredient) {
    OrderDetails.push(ingredient);
  }

  isMeatball(): boolean {
    if (OrderDetails.includes(Meats[0])) {
      return true;
    } else {
      return false;
    }
  }

  setCookingDegree(degree: CookingDegree) {
    this.orderService.cookingDegree = degree;
  }

  get isCookingDegreeSelected(): boolean {
    return this.orderService.cookingDegree ? true : false;
  }

  canOrdered(ingredient: Ingredient): boolean {
    let item = OrderDetails.find(p => p.name === ingredient.name);
    if (item || !ingredient.canOrdered || this.orderService.isProcessing) {
      return true;
    }
    return false;
  }

}
