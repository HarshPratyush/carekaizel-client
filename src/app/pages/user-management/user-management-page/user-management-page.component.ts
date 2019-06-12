import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationDailogComponent } from '../dailogs/confirmation-dailog/confirmation-dailog.component';

@Component({
  selector: 'kaizel-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent implements OnInit {

  userList: Array<{ status: string, userList: any[] }> = [];
  chartData: any[] = [];
  colorSets: any;
  view: number[] = [300, 500]
  customColors = [];


  constructor(private userService:UserService,public dialog: MatDialog) {
  }

  ngOnInit() {

    this.userService.getMechanicDetails().subscribe(data=>{
      this.userList=data.users;
      this.chartData=data.chartData;
      this.customColors=data.customColors;
    })
  }

  openDailog(action,userData)
  {
    if(action.class.includes('approve'))
    {
      const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
        width: '400px',
        data: {message:'You are about to approve this mechanic.Press Ok to proceed else cancel'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
        console.log(result)
        }
      });
    }
    else if(action.class.includes('lock'))
    {
      const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
        width: '400px',
        data: {message:'You are about to disable this mechanic.Press Ok to proceed else cancel'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
        console.log(result)
        }
      });
    }
    else if(action.class.includes('unlock'))
    {
      const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
        width: '400px',
        data: {message:'You are about to enable this mechanic.Press Ok to proceed else cancel'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
        console.log(result)
        }
      });
    }
  }

}
