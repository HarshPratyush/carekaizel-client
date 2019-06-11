import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

declare var $: any;
@Component({
  selector: 'kaizel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  credentials: any = {
    username: '',
    password: ''
  };
  newPassword: any;
  confirmPassword: any;
  form: FormGroup;
  app: AppService;
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
  view:number[]=[400,500]
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
  constructor( private appService: AppService, private router: Router, private frmbuilder: FormBuilder) { }

  ngOnInit() {
    this.app = this.appService;
  }
  login() {
    this.app.authenticate(this.credentials, () => {
      if (this.app.authenticated === true) {
      } else {
        $('.error-message').fadeIn('slow');
        setTimeout( () => {
          $('.error-message').fadeOut('slow');
        }, 5000);
      }
    });
    return false;
  }
}
