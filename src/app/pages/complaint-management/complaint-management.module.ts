import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintManagementRoutingModule } from './complaint-management-routing.module';
import { ComplaintManagementPageComponent } from './complaint-management-page/complaint-management-page.component';
import { MatTooltipModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComplaintViewPageComponent } from './complaint-view-page/complaint-view-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComplaintManagementPageComponent, ComplaintViewPageComponent],
  imports: [
    CommonModule,
    ComplaintManagementRoutingModule,
    MatTooltipModule,
    NgxChartsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ComplaintManagementModule { }
