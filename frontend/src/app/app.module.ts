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
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { BreathingComponent } from './components/breathing/breathing.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ChallengeThoughtComponent } from './components/challenge-thought/challenge-thought.component';
import { GoodEventsComponent } from './components/good-events/good-events.component';

import { ValidateService } from './services/validateService/validate.service'
import { AuthService } from './services/authService/auth.service'
import { TaskService } from './services/taskService/task.service'
import { AuthGuard } from './guards/auth.guard';
import { TimerComponent } from './components/timer/timer.component'


const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
    {path:'profiel',component:ProfileComponent, canActivate:[AuthGuard]},
    {path:'breathing',component:BreathingComponent},
    {path:'challenge-thought',component:ChallengeThoughtComponent, canActivate:[AuthGuard]},
    {path:'good-events',component:GoodEventsComponent, canActivate:[AuthGuard]},
    {path:'stopwatch',component:StopwatchComponent, canActivate:[AuthGuard]},
    {path:'timer',component:TimerComponent,},
    {path:'task',component:TaskComponent, canActivate:[AuthGuard]},
    {path:'tasks',component:TasksComponent, canActivate:[AuthGuard]},
    {path:'thoughts',component:ThoughtsComponent, canActivate:[AuthGuard]},
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
    GoodEventsComponent,
    TimerComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
