import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintManagementServiceService } from '../services/complaint-management-service.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'kaizel-complaint-view-page',
  templateUrl: './complaint-view-page.component.html',
  styleUrls: ['./complaint-view-page.component.scss']
})
export class ComplaintViewPageComponent implements OnInit {

  submissionData;
  mechanicList:any[]=[];
  selectedMechanic;

  constructor(private router:Router,private complaintService:ComplaintManagementServiceService,private toastr:ToastrService) { }

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

}
