import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs'

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    ticks: number = 0;
    minutes: number = 0;
    hours: number = 0;
    seconds: number=0;

    sub: Subscription;

    timer = Observable.timer(0, 1000);

    constructor() {
    }

    ngOnInit() {
    }

    onClickStart() {

        this.sub = this.timer.subscribe(
            t => {
                this.ticks = t;

                this.seconds = this.getSeconds(this.ticks);
                this.minutes = this.getMinutes(this.ticks);
                this.hours = this.getHours(this.ticks);
            }
        );

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

    onClickStop() {
        console.log(this.ticks);
    }

}
