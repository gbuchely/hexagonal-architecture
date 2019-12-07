import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  
  public authUrl = 'https://hexagonal.auth.us-east-1.amazoncognito.com/oauth2/authorize';
  public client_id='639601tqi5eo74fenbcjmc8o2d'; 
  public redirect_uri='http://localhost:4200/callback';
  public scope='openid poems/admin';

  public access_code;

  public grant_type = 'authorization_code';
  public client_secret = 'tlcbcctksbsms7lakjhppa2b461h2fb0832ghgf97fmr762brqq';

  public tokenUrl = 'https://hexagonal.auth.us-east-1.amazoncognito.com/oauth2/token';
  public access_token;
  public expires_in;
  public id_token;
  public refresh_token;
  public token_type;

  public logoutUrl = 'https://hexagonal.auth.us-east-1.amazoncognito.com/logout';
  public logout_callback = 'http://localhost:4200/login';

  public mainRestAPIServerPath = 'http://localhost:8080';
  public subsidiaryRestAPIServerPath = 'http://localhost:8081';

  constructor() { }

  
}
