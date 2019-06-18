import { environment } from 'src/environments/environment';

export class Constants {
 

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
}
