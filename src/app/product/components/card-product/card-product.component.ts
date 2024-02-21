import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  @Input() product: Product = {
    _id: '',
    date_at: '',
    message: '',
    title: '',
    image: '',
    price: 0,
    user: {
      _id: '',
      name: ''
    }   
  };
}
