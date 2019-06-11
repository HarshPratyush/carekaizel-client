import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
    pathMatch: 'full'
  }
  ,{
    path:'user-management',
    loadChildren:()=> import('./pages/user-management/user-management.module').then(module=>module.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
