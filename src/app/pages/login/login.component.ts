import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/models/constants';

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
  view:number[]=[400,500]
  constructor( private appService: AppService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.app = this.appService;

    if(this.app.checkLoggedIn()){
      this.getAllSubmissionsLogin();
    }
  }

  getAllSubmissionsLogin(){
    this.appService.getAllSubmissionsLogin()
  }

  login() {
    this.app.authenticate(this.credentials, () => {
      if (this.app.checkLoggedIn()) {

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
