import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BurgerComponent } from './components/burger/burger.component';
import { IngredientTableComponent } from './components/ingredient-table/ingredient-table.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    IngredientTableComponent,
    OrderDetailsComponent,
    MenuComponent,
    OrderStatusComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
