import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/models/constants';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/response-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }



  public getMechanicDetails():Observable<any>{
    return this.httpClient.get(Constants.MECHANIC_DETAILS)
  }

  public approveUser(accountId):Observable<ResponseModel>{
    return this.httpClient.post(Constants.APPROVE_USER,accountId) as Observable<ResponseModel>
  }

  public disableUser(accountId):Observable<ResponseModel>{
    return this.httpClient.post(Constants.DISABLE_USER,accountId) as Observable<ResponseModel>
  }

  public enableUser(accountId):Observable<ResponseModel>{
    return this.httpClient.post(Constants.ACTIVATE_USER,accountId) as Observable<ResponseModel>
  }
}
