import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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


  constructor(private userService:UserService) {
  }

  ngOnInit() {

    this.userService.getMechanicDetails().subscribe(data=>{
      this.userList=data.users;
      this.chartData=data.chartData;
      this.customColors=data.customColors;
    })
  }

}
