import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarList:boolean = false;
  name:string = '';

  constructor(private authService: AuthService){}
  
  ngOnInit() {
      const {name} = JSON.parse(localStorage.getItem('user')!);
      this.name  = name;    
  }

  logOut() {
    this.authService.logOut();
  }
  slide() {
    this.navbarList = !this.navbarList;
  }
}
