import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintManagementPageComponent } from './complaint-management-page/complaint-management-page.component';
import { ComplaintViewPageComponent } from './complaint-view-page/complaint-view-page.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component:ComplaintManagementPageComponent
},
{
  path:'view-complaint',
  pathMatch:'full',
  component:ComplaintViewPageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintManagementRoutingModule { }
