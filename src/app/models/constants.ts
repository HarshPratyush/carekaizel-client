import { environment } from 'src/environments/environment';

export class Constants {
  public static get ALL_SUBMISSIONS_LOGIN(): string{return Constants.API_GATE_WAY+'getAllSubmissionsLogin'};
  public static get SELECT_MECHANIC_ERROR_MESSAGE():string{return "Please Select a mechanic to assign"}
  public static get ACCESS_TOKEN(): string{return 'kaizel_access_token';}
  public static get REFRESH_TOKEN(): string{return 'kaizel_refresh_token';}
  public static get USER_DETAILS(): string{return 'kaizel_user_details';}
  public static get API_GATE_WAY(): string {return environment.api_url; }
  public static get LOGIN_URL(): string {return 'oauth/token'};
  public static get USER_DATA(): string {return 'user'};
  public static get MECHANIC_DETAILS():string {return Constants.API_GATE_WAY+'getAllUsers'}
  public static get APPROVE_USER():string{return Constants.API_GATE_WAY+'approveMechanic'}
  public static get DISABLE_USER():string{return Constants.API_GATE_WAY+'disableMechanic'}
  public static get ACTIVATE_USER():string{return Constants.API_GATE_WAY+'activateMechanic'}
  public static get ERROR_MESSAGE():string{return 'Cannot Connect to server'}
  public static get ALL_SUBMISSION():string{return Constants.API_GATE_WAY+'getAllSubmissions'}
  public static get VIEW_SUBMISSION():string{return Constants.API_GATE_WAY+'viewSubmission'}
  public static get ALL_MECHANICS():string{return Constants.API_GATE_WAY+'getAllMechanics'}
  public static get ASSIGN_TO_MECHANIC():string{return Constants.API_GATE_WAY+'assignToMechanic'}
}
