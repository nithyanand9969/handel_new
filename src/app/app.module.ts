import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './home/user/user.component';
import { AllTranscationComponent } from './home/all-transcation/all-transcation.component';
import { MaterialComponent } from './home/material/material.component';
import { BidingComponent } from './home/biding/biding.component';
import { ReportsComponent } from './home/reports/reports.component';
import { CompanyInfoComponent } from './home/company-info/company-info.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { TopWidgetsComponent } from './home/top-widgets/top-widgets.component';
import { RegisterComponent } from './home/user/register/register.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { CorporateregisterComponent } from './corporateregister/corporateregister.component';
import { TraderregisterComponent } from './traderregister/traderregister.component';
import { IntermediaryregisterComponent } from './intermediaryregister/intermediaryregister.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './home/logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserinfoComponent } from './home/userinfo/userinfo.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UsersComponent } from './users/users.component';
import { UserSideNavComponent } from './user-side-nav/user-side-nav.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    AllTranscationComponent,
    MaterialComponent,
    BidingComponent,
    ReportsComponent,
    CompanyInfoComponent,
    WidgetsComponent,
    TopWidgetsComponent,
    RegisterComponent,
    CorporateregisterComponent,
    TraderregisterComponent,
    IntermediaryregisterComponent,
    LogoutComponent,
    ResetPasswordComponent,
    UserinfoComponent,
    FooterComponent,
    ForgetpasswordComponent,
    UsersComponent,
    UserSideNavComponent,
    
    

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
