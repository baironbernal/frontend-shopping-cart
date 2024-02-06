import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CartProductComponent,
  ],
  exports: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ]
  
})
export class SharedModule { }
