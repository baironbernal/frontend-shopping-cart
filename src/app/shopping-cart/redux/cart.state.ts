// cart.state.ts
import { createReducer, on } from '@ngrx/store';
import * as CartActions from './actions/cart.actions';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { item }) => {
    const existingItem = state.items.find(i => i.id === item.id);

    if (existingItem) {
      const updatedItems = state.items.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );

      return { ...state, items: updatedItems };
    }

    return { ...state, items: [...state.items, { ...item, quantity: 1 }] };
  }),

  // Add other actions like removeFromCart, updateCartItemQuantity as needed
);
