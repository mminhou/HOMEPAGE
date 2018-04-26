import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CategoryService } from './service/category.service';
import { fadeAnimation } from './_animations/fade_animation';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})

export class AppComponent implements OnInit {
  title = 'app';
  _categoryArray: any[] = [];
  data: any;
  active = false;

  constructor( private route: ActivatedRoute, private router: Router, private authService: AuthService, private categoryService: CategoryService,
  ) {}

  ngOnInit(): void {
    this.shrink_nav();
    this._getCategoryList();
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  shrink_nav() {
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
      $('.counter').html(scrollTop);
      if (scrollTop >= 100) {
        $('#global-nav').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#global-nav').removeClass('scrolled-nav');
      }
    });
  }

  _getCategoryList() {
    this.categoryService.getCategoryList()
      .subscribe(
        resultArray => this._categoryArray = resultArray,
        error => console.log("Error :: " + error
        ));
  }

  active_nav() {
    if (this.router.routerState.snapshot.url == '/global_login') {
      if (localStorage.getItem('currentUser')) {
        this.home();
      }
      return true;
    }
    else
      return false;
  }

  reload(){
    location.reload();
  }


  getColor() {
    console.log(this.router.routerState.snapshot.url);
    switch(this.router.routerState.snapshot.url) {
      case '/home':
        return 'transparent';
      case '/study/520024':
        return 'transparent';
      case '/project/417780':
        return 'transparent';
      case '/about':
        return 'url("../../assets/nav.jpg")';
    }
    return 'transparent';
  }

  home() {
    this.router.navigateByUrl('home');
  }



}

