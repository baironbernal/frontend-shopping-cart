import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProductResponse } from '../interfaces/product-response.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(environment.base_url + '/products');
  }

  getUserProducts(userId: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(environment.base_url + '/products/' + userId);
  }

  createProduct(product: Product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(environment.base_url + '/products/', product);
  }
}
