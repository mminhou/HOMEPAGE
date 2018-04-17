import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../..//service/auth.service';

@Component({
  selector: 'app-global-login',
  templateUrl: './global-login.component.html',
  styleUrls: ['./global-login.component.css']
})
export class GlobalLoginComponent implements OnInit {

  title = 'app';
  model: any = {};
  currentUser: any = {};


  constructor( private router: Router, private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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



}
