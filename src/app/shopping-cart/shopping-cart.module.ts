import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ShoppingRoutingModule } from './shopping-cart-routing.module';

import { CartComponent } from './pages/cart/cart.component';
import { cartReducer } from './redux/cart.state';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    StoreModule.forRoot({ cart: cartReducer }),
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingCartModule { }
