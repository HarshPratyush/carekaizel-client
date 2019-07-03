import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmationDailogComponent } from '../dailogs/confirmation-dailog/confirmation-dailog.component';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/models/constants';
import { CellOptions } from '@progress/kendo-angular-excel-export';

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
  cellOption:CellOptions={
    background:'#525174',
    bold:true,
    wrap:true,
    fontSize:14,
    color:'#ffff'
  }


  constructor(private userService:UserService,public dialog: MatDialog,private toatsr:ToastrService) {
  }

  ngOnInit() {

    this.getUserList();
  }

  getUserList()
  {
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
       this.userService.approveUser(userData.id).subscribe(d=>{
         if(d.statusCode==200)
         {
           this.toatsr.success(d.message);
           this.getUserList();
         }
         else{
           this.toatsr.error(d.message);
         }
       },error=>{
         this.toatsr.error(Constants.ERROR_MESSAGE)
       })
        }
      });
    }
    else if(action.class.includes('fa-lock'))
    {
      const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
        width: '400px',
        data: {message:'You are about to disable this mechanic.Press Ok to proceed else cancel'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.userService.disableUser(userData.id).subscribe(d=>{
            if(d.statusCode==200)
            {
              this.toatsr.success(d.message);
              this.getUserList();
            }
            else{
              this.toatsr.error(d.message);
            }
          },error=>{
            this.toatsr.error(Constants.ERROR_MESSAGE)
          })
        }
      });
    }
    else if(action.class.includes('fa-unlock'))
    {
      const dialogRef = this.dialog.open(ConfirmationDailogComponent, {
        width: '400px',
        data: {message:'You are about to enable this mechanic.Press Ok to proceed else cancel'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.userService.enableUser(userData.id).subscribe(d=>{
            if(d.statusCode==200)
            {
              this.toatsr.success(d.message);
              this.getUserList();
            }
            else{
              this.toatsr.error(d.message);
            }
          },error=>{
            this.toatsr.error(Constants.ERROR_MESSAGE)
          })
        }
      });
    }
  }

  getFileName(type:string){
    return 'Users'+type+'_'+new Date()+'.xlsx';
  }

}
