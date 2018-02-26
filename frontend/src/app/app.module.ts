import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {TrackingComponent} from './components/tracking/tracking.component';
import {HomeDriverComponent} from './components/home-driver/home-driver.component';

import {ValidateService} from './services/validateService/validate.service'
import {AuthService} from './services/authService/auth.service'
import {FreightService} from './services/freightService/freight.service'
import {OrderService} from "./services/orderService/order.service";

import {AuthGuard} from './guards/auth.guard';
import {AuthGuardDriver} from './guards/auth.driver.guard'
import {AuthGuardClient} from './guards/auth.client.guard'
import {AuthGuardAdmin} from './guards/auth.admin.guard'
import {FooterComponent} from './components/footer/footer.component';
import {OrderComponent} from './components/order/order.component';

import {UserManagementComponent} from './components/user-management/user-management.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
    {path: 'tracking', component: TrackingComponent, canActivate: [AuthGuard]},
    {path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuardAdmin]},
    {path: 'home-driver', component: HomeDriverComponent, canActivate: [AuthGuardDriver]}
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        FooterComponent,
        OrderComponent,
        TrackingComponent,
        UserManagementComponent,
        HomeDriverComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FlashMessagesModule.forRoot(),
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig.firebase, 'rfid-trailer'),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],

    providers: [ValidateService, AuthService, FreightService, AuthGuard, AuthGuardDriver, AuthGuardAdmin, AuthGuardClient, OrderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
