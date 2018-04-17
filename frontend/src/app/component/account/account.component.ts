import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'account-app',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})

export class AccountComponent implements OnInit{
  currentUser: any = {};

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    // remove user from local storage to log user out
    this.authService.logout()
    location.reload()
  }
}
