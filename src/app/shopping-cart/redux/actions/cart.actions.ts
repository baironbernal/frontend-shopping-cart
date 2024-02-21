// cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { CartItem } from '../cart.state';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ item: CartItem }>()
);

// Add other actions like removeFromCart, updateCartItemQuantity as needed
