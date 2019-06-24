import { Component, OnInit } from '@angular/core';
import { ComplaintManagementServiceService } from '../services/complaint-management-service.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/models/constants';
import { Router } from '@angular/router';


@Component({
  selector: 'kaizel-complaint-management-page',
  templateUrl: './complaint-management-page.component.html',
  styleUrls: ['./complaint-management-page.component.scss']
})
export class ComplaintManagementPageComponent implements OnInit {

  complaintStatusModel:any;
  view: number[] = [300, 700]
 constructor(private complaintService:ComplaintManagementServiceService,private toastr:ToastrService,private router:Router){

 }
  ngOnInit() {
    this.complaintService.getAllSubmissions().subscribe(data=>{
      this.complaintStatusModel = data
    },error=>{
      this.toastr.error(Constants.ERROR_MESSAGE)
    })
  }

  openDailog(action,complaint)
  {
    this.complaintService.complaintId=complaint.id;
    this.router.navigateByUrl('complaint-managment/view-complaint')
  }
 

}
