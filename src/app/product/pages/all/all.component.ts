import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductResponse } from '../../interfaces/product-response.interface';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent {
  productsResponse: ProductResponse = {
    ok: false,
    products: []
  };

  private suscription: Subscription = new Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts()
  }

   getAllProducts() {
      this.suscription = this.productService.getProducts().subscribe(data => this.productsResponse = data);
   }

   ngOnDestroy() {
    this.suscription.unsubscribe();
   }
}
