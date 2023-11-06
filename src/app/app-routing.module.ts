import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Import your AuthGuard here
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // ... other routes without authentication

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard], // Protect this route with AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // ... other child routes that require authentication
    ]
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Protect this route with AuthGuard
  { path: 'side-nav', component: SideNavComponent, canActivate: [AuthGuard] } // Protect this route with AuthGuard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
