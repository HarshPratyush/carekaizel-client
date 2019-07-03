import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { MatTabsModule, MatButtonModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ConfirmationDailogComponent } from './dailogs/confirmation-dailog/confirmation-dailog.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

@NgModule({
  declarations: [UserManagementPageComponent, ConfirmationDailogComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatTabsModule,
    NgxChartsModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ExcelExportModule
  ],
  entryComponents:[ConfirmationDailogComponent]
})
export class UserManagementModule { }
