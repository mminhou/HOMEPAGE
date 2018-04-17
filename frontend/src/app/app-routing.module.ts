import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
// Components
import { HomeComponent } from './component/home/home.component';
import { GlobalLoginComponent } from './component/global-login/global-login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SinglePageComponent } from './component/single-page/single-page.component';
import { SinglePageDetailComponent } from './component/single-page-detail/single-page-detail.component';
import { ProjectComponent } from './component/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/global_login', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'global_login', component: GlobalLoginComponent },
  { path: ':category/:category_id', component: SinglePageComponent, canActivate: [AuthGuardService] },
  { path: ':category/:category_id/:posts_id', component: SinglePageDetailComponent, canActivate: [AuthGuardService] },
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuardService] },
  // add component
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
