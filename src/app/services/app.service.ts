import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../models/constants';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;
  logoutSuccess: boolean = false;
  isValid: boolean = true;
  _data: any;
  validationMsg: any;
  chartData:any[]=[];
  view:number[]=[400,500]
  customColors = []; 
  constructor(private http: HttpClient, private router: Router,private toastr:ToastrService) { }

  authenticate(credentials, callback) {

    this.isValid = false;
    this.deleteCookies();
     this.callServer(credentials).subscribe(response => {
      this._data = response;   //store the token
      localStorage.setItem(Constants.ACCESS_TOKEN, this._data.access_token);
      localStorage.setItem(Constants.REFRESH_TOKEN, this._data.refresh_token);

      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this._data.access_token,
          'Content-type': 'application/json'
        })
      };

      this.getAllSubmissionsLoginAsObserVable().subscribe(d=>{
        
        let data:any =d;
        this.chartData=data.chartData;
        this.customColors=data.customColors;
      
      this.http.get(Constants.API_GATE_WAY + Constants.USER_DATA, httpOptions).subscribe(user => {

        localStorage.setItem(Constants.USER_DETAILS, JSON.stringify(user));
        this.router.navigateByUrl((user as any).sessionMap.landing);
        this.isValid = true;
      });
    },error=>{
     this.validationMsg=error.error.error_description;
    setTimeout(() => {
      this.validationMsg = '';
    }, 3000)

      this.deleteCookies();
    })

     
    }, error => {
      if (error == 'User is disabled')
        this.validationMsg = 'Given username has been disabled. Please contact your admin';
      else if (error == 'Invalid Credentials !' || error == 'Bad credentials')
        this.validationMsg = 'Wrong username/password entered';
        else
        this.validationMsg="Couldn't Connect to Server"
      setTimeout(() => {
        this.validationMsg = '';
      }, 3000)

      this.isValid = true;
    })
  }

  callServer(userDetails) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      })
    };

    let URL: string = Constants.API_GATE_WAY + Constants.LOGIN_URL;
    let params = new URLSearchParams();
    params.append('username', userDetails.username);
    params.append('password', userDetails.password);
    params.append('grant_type', 'password');
    // params.append('client_id','web');

    return this.http.post(URL, params.toString(), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.error_description}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      //'Something bad happened; please try again later.');
      error.error.error_description);
  };

  checkLoggedIn(): boolean {
    if (!localStorage.getItem(Constants.ACCESS_TOKEN)) {
      return false
    } else {
      return true
    }
  }

  //handles nav-links which are going to be shown
  checkUserAuthorization(expectedRoles) {


    if (localStorage.getItem(Constants.USER_DETAILS)) {
      var token = JSON.parse(localStorage.getItem(Constants.USER_DETAILS));
    }
    let flag = false;
    if (token !== undefined) {
      if (this.checkLoggedIn() && token.authorities) {
        expectedRoles.forEach(expectedRole => {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < token.authorities.length; i++) {
            if (token.authorities[i] === expectedRole) {
              flag = true;
            }
          }
        });
      }
    }
    return flag;
  }

  logout() {
    // this.http.delete(Constants.API_GATE_WAY + 'oauth/logout').subscribe(data => { });
    this.deleteCookies();
    this.router.navigateByUrl('/');
    this.logoutSuccess = true;
    setTimeout(() => {
      this.logoutSuccess = false;
    }, 2000)
  }

  deleteCookies() {
    localStorage.removeItem(Constants.USER_DETAILS);
    localStorage.removeItem(Constants.ACCESS_TOKEN);
    localStorage.removeItem(Constants.REFRESH_TOKEN);
    localStorage.clear();
  }

  getUserDetails() {
    if (this.checkLoggedIn()) {
      return JSON.parse(localStorage.getItem(Constants.USER_DETAILS));
    } else {
      return {}
    }
  }

  public getAllSubmissionsLogin(){
    return this.http.get(Constants.ALL_SUBMISSIONS_LOGIN).subscribe(d=>{
      let data:any =d;
      this.chartData=data.chartData;
      this.customColors=data.customColors;
    },error=>{
      this.toastr.error(Constants.ERROR_MESSAGE)
    })
  }

  public getAllSubmissionsLoginAsObserVable(){
    return this.http.get(Constants.ALL_SUBMISSIONS_LOGIN);
  }
}
