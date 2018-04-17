// Module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';


// Service
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { BoardService } from './service/board.service';
import { CategoryService } from './service/category.service';
import { PostsService } from './service/posts.service';

// Directive
import { SortGridPipe } from './directive/sort_grid_pipe';
import { SafeHtmlPipe } from "./directive/safe_html_pipe";

// Component
import { AccountComponent } from './component/account/account.component';
import { ProfileComponent } from './component/profile/profile.component';
import { GlobalLoginComponent } from './component/global-login/global-login.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SinglePageComponent } from './component/single-page/single-page.component';
import { SinglePageDetailComponent } from './component/single-page-detail/single-page-detail.component';
import { ProjectComponent } from './component/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AccountComponent,
    SortGridPipe,
    SafeHtmlPipe,
    ProfileComponent,
    GlobalLoginComponent,
    SinglePageComponent,
    SinglePageDetailComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    NgxPaginationModule,
    ParticlesModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BoardService,
    CategoryService,
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
