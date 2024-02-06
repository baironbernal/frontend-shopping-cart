import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductRoutingModule } from './product-routing.module';
import { CardProductComponent } from './components/card-product/card-product.component';



@NgModule({
  declarations: [
    ListComponent,
    AllComponent,
    CreateComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ProductModule { }
