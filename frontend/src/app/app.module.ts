import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validateService/validate.service'
import { AuthService } from './services/authService/auth.service'
import { AuthGuard } from './guards/auth.guard';
import { AuthGuardDriver } from './guards/auth.driver.guard'
import { AuthGuardClient } from './guards/auth.client.guard'
import { AuthGuardAdmin } from './guards/auth.admin.guard'
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { OrderService } from "./services/orderService/order.service";
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { TrackingComponent } from './components/tracking/tracking.component';


const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
    {path:'order',component:OrderComponent},
    {path:'user-management',component:UserManagementComponent/*, canActivate:[AuthGuardAdmin]*/}
    ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    OrderComponent,
    UserManagementComponent,
    TrackingComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FlashMessagesModule.forRoot(),
      AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [ValidateService, AuthService, AuthGuard, AuthGuardDriver, AuthGuardAdmin, AuthGuardClient, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
