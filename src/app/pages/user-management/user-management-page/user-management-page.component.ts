import { Component, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'kaizel-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.scss']
})
export class UserManagementPageComponent implements OnInit {

  userList:Array<{status:string,userList:any[]}>=[{status:'Active',userList:[]},{status:'De-Activated',userList:[]},
  {status:'New Registration',userList:[]}];
  chartData:any[]=[
    {
      "name": "Active",
      "value": 40632
    },
    {
      "name": "De-Activated",
      "value": 49737
    },
    {
      "name": "New Registration",
      "value": 36745
    }
  ];
  colorSets: any;
  view:number[]=[300,500]
  colorScheme;
  customColors = [
    { 
      name: 'Active',
      value: '#3d3c57'
    },
    { 
      name: 'De-Activated',
      value: '#525174'
    }
    , { 
      name: 'New Registration',
      value: '#a9a9ba'
    }
];
  constructor() {
    Object.assign(this, {
      colorSets
    });
    console.log(colorSets)
    this.colorScheme=this.colorSets.filter(d=> d.name=='cool')
   }

  ngOnInit() {
  }

}
