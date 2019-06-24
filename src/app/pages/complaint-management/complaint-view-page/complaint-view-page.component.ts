import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintManagementServiceService } from '../services/complaint-management-service.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/models/constants';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'kaizel-complaint-view-page',
  templateUrl: './complaint-view-page.component.html',
  styleUrls: ['./complaint-view-page.component.scss']
})
export class ComplaintViewPageComponent implements OnInit {

  submissionData;
  mechanicList:any[]=[];
  selectedMechanic;

  constructor(private router:Router,private complaintService:ComplaintManagementServiceService,
    private toastr:ToastrService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    if(this.complaintService.complaintId)
    {
      this.complaintService.viewSubmission().subscribe(data=>{
        this.submissionData=data;
        if(!this.submissionData.mechanicName){
          this.complaintService.getAllMechanics().subscribe(data=>{
            this.mechanicList=data;
          },error=>{
            this.toastr.error(Constants.ERROR_MESSAGE)
          })
        }
      },error=>{
        this.toastr.error(Constants.ERROR_MESSAGE)
      })
    }
    else
    {
      this.router.navigateByUrl('complaint-managment')
    }
  }

  assignMechanic()
  {
    if(this.selectedMechanic){
      this.complaintService.assignToMechanic(this.selectedMechanic.id,this.complaintService.complaintId).subscribe(data=>{
        if(data.statusCode == 200)
        {
        this.toastr.success(data.message)
        this.router.navigateByUrl('complaint-managment')
        }
        else
        this.toastr.error(data.message)
      },error=>{
        this.toastr.error(Constants.ERROR_MESSAGE)
      })
    }
    else
    {
      this._snackBar.open(Constants.SELECT_MECHANIC_ERROR_MESSAGE, "Ok", {
        duration: 2000,
      });
    }
  }

}
