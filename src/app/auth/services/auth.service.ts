import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment.development';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token')  || '';

    return this.http.get(environment.base_url + '/login/renew', {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any ) => {
        localStorage.setItem('token', resp.token)
      }),
      map(resp =>  true),
      catchError(err => of(false))
    );
  }


  login(formData: LoginForm) {
    return this.http.post(environment.base_url + '/login', formData)
        .pipe(
          tap((resp: any) => {
            localStorage.setItem('token', resp.token)
            localStorage.setItem('user', JSON.stringify(resp.user))
          })
        );
  }

  logOut() {
    localStorage.removeItem('token'); 
    this.router.navigateByUrl('/auth/login');
  }

  createUser(formData: RegisterForm){
    console.log('Creando user')
    
    return this.http.post(environment.base_url + '/users', formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token)
      })
    );
  }
}
