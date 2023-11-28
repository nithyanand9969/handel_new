import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Import your AuthGuard here
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserSideNavComponent } from './user-side-nav/user-side-nav.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './home/user/user.component';
import { CorporateregisterComponent } from './corporateregister/corporateregister.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LogoutComponent } from './home/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'forgotpassword',component:ForgetpasswordComponent},
  // ... other routes without authentication

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: 'user', component: UserComponent },
    {path:'corporateregister',component:CorporateregisterComponent},
    // ... other child routes that require authentication
  ]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] }, // Protect this route with AuthGuard
  { path: 'side-nav', component: SideNavComponent, canActivate: [AuthGuard] },
  {path:'user-side-nav',component:UserSideNavComponent,canActivate: [AuthGuard]},
  {path:'logout',component:LogoutComponent} // Protect this route with AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
