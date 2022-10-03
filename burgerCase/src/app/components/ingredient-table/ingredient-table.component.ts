import { Meats, Extras } from './../../models/constants';
import { Ingredients, Bread } from '../../models/constants';
import { Ingredient } from './../../models/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-table',
  templateUrl: './ingredient-table.component.html',
  styleUrls: ['./ingredient-table.component.css']
})
export class IngredientTableComponent implements OnInit {

  ingredients: Ingredient[] = Ingredients;
  extras: Ingredient[] = Extras;
  bread: Ingredient = Bread;
  meats: Ingredient[] = Meats;

  constructor() { }

  ngOnInit(): void {

  }

}
