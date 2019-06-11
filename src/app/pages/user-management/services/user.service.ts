import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/models/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }



  public getMechanicDetails():Observable<any>{
    return this.httpClient.get(Constants.MECHANIC_DETAILS)
  }

}
