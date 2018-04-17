import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  model: any = {};

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
          location.reload();
        },
        error => {
          alert('User does note exist!')
        },
      );
  }

  logout() {
    // remove user from local storage to log user out
    this.authService.logout()
  }

}
