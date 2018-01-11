import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs'
import {TaskService} from '../../services/taskService/task.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

    ticksOnPause: number = 0;
    ticks: number = 0;
    minutes: number = 0;
    hours: number = 0;
    seconds: number = 0;

    sub: Subscription;

    timer = Observable.timer(0, 1000);

    constructor(private router: Router,
                private taskService: TaskService) {
    }

    ngOnInit() {
        this.initialPadding();
    }

    unsubscribe(){
        if(this.sub){
            this.sub.unsubscribe();
        }
    }

    initialPadding() {
        this.seconds = this.pad(this.seconds);
        this.minutes = this.pad(this.minutes);
        this.hours = this.pad(this.hours);
    }


    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    onClickStart() {
        this.sub = this.timer.subscribe(
            t => {
                this.ticks = t;

                this.seconds = this.getSeconds(this.ticks + this.ticksOnPause);
                this.minutes = this.getMinutes(this.ticks + this.ticksOnPause);
                this.hours = this.getHours(this.ticks + this.ticksOnPause);
            }
        );
    }

    onClickPause() {
        console.log("Pauze");
        this.unsubscribe();
        this.ticksOnPause = this.ticks + this.ticksOnPause;
    }

    onClickReset() {
        console.log("Reset");
        this.unsubscribe();
        this.ticksOnPause = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.initialPadding();
    }

    onClickDone() {
        this.unsubscribe();
        this.router.navigate(['/tasks'])
    }

    onClickCancel(event){
        event.preventDefault();
        this.router.navigate(['/tasks']);
        this.unsubscribe();
    }

    ngOnDestroy() {
        this.ticksOnPause = 0;
        this.unsubscribe();
    }



}
