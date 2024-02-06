// shopping-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
    { 
      path: '',
      canActivate: [AuthGuard],
      children: [
        { path: 'details', component: CartComponent },
        { path: '', redirectTo: 'details', pathMatch: 'full' },
      ]
    },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
