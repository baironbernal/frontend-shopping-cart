// shopping-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthGuard } from '../auth/guards/auth.guard';


const routes: Routes = [
    { 
      path: '',
      canActivate: [AuthGuard],
      children: [
        { path: 'list', component: ListComponent },
        { path: 'all', component: AllComponent },
        { path: 'create', component: CreateComponent },
        { path: '', redirectTo: 'all', pathMatch: 'full' },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
