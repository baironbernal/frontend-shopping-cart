import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostInterceptorService implements HttpInterceptor{

  constructor() { }

  token: string = localStorage.getItem('token') || '';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por interceptor');

    const headers = new HttpHeaders({
      'x-token': this.token,
      'new-token': 'Bairint'
    });

    const reqClone = req.clone({
      headers
    })
      
    return next.handle(reqClone);
  }
}
