import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './home/user/user.component';
import { AllTranscationComponent } from './home/all-transcation/all-transcation.component';
import { MaterialComponent } from './home/material/material.component';
import { BidingComponent } from './home/biding/biding.component';
import { ReportsComponent } from './home/reports/reports.component';
import { CompanyInfoComponent } from './home/company-info/company-info.component';
import { CorporateregisterComponent } from './corporateregister/corporateregister.component';
import { TraderregisterComponent } from './traderregister/traderregister.component';
import { IntermediaryregisterComponent } from './intermediaryregister/intermediaryregister.component';
import { LogoutComponent } from './home/logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { authGuard } from './auth.guard';
  
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'corporateregister', component: CorporateregisterComponent },
  { path: 'traderregister', component: TraderregisterComponent },
  { path: 'intermediaryregister', component: IntermediaryregisterComponent },
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'user', component: UserComponent,
        children: [
        { path: 'register', component: UserComponent }, 
       
      ]
      },
      { path: 'userinfo', component:UserinfoComponent},
      { path: 'all-transcation', component: AllTranscationComponent },
      { path: 'material', component: MaterialComponent },
      { path: 'biding', component: BidingComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'company-info', component: CompanyInfoComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: 'admin', component: AdminComponent },
  { path: 'side-nav', component: SideNavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
