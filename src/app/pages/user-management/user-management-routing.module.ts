import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:UserManagementPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
