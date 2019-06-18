import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintManagementPageComponent } from './complaint-management-page/complaint-management-page.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:ComplaintManagementPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintManagementRoutingModule { }
