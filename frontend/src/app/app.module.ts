import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { BreathingComponent } from './components/breathing/breathing.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ChallengeThoughtComponent } from './components/challenge-thought/challenge-thought.component';
import { GoodEventsComponent } from './components/good-events/good-events.component';

import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service'
import { FlashMessagesModule} from 'angular2-flash-messages';


const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'profile',component:ProfileComponent},
    {path:'breathing',component:BreathingComponent},
    {path:'challenge-thought',component:ChallengeThoughtComponent},
    {path:'good-events',component:GoodEventsComponent},
    {path:'stopwatch',component:StopwatchComponent},
    {path:'task',component:TaskComponent},
    {path:'tasks',component:TasksComponent},
    {path:'thoughts',component:ThoughtsComponent},
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
    TasksComponent,
    TaskComponent,
    StopwatchComponent,
    BreathingComponent,
    ThoughtsComponent,
    ChallengeThoughtComponent,
    GoodEventsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      HttpModule,
      FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
