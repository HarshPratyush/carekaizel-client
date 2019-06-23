import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/models/constants';

@Injectable({
  providedIn: 'root'
})
export class ComplaintManagementServiceService {

  public complaintId;
  constructor(private httpClient:HttpClient) { }

  getAllSubmissions():Observable<any>
  {
    return this.httpClient.get(Constants.ALL_SUBMISSION)
  }

  viewSubmission():Observable<any>{
    return this.httpClient.post(Constants.VIEW_SUBMISSION,this.complaintId)
  }

  getAllMechanics():Observable<any>{
    return this.httpClient.get(Constants.ALL_MECHANICS);
  }
}
