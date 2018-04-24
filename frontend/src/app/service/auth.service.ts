import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {


  private test_authURL = 'http://localhost:8000/api-token-auth/'
  private _authURL = 'http://18.204.211.251/api-token-auth/'

  constructor(private http: Http, private router: Router) { }

  isLoggedIn() {
    if(localStorage.getItem('currentUser')) {
      return false;
    } else {
      return true;
    }
  }
  // Login manager
  login(log_email: string, log_password: string) {
    return this.http.post(this._authURL , { email: log_email, password: log_password })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }
  // Logout manager
  logout() {
    this.router.navigateByUrl('/global_login')
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
