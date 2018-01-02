import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    ticks = 0;

    constructor() {
    }

    ngOnInit() {
    }

    onClickStart() {
        let timer = Observable.timer(0, 1000);
        timer.subscribe(t => this.ticks = t);
    }

    onClickStop() {
        console.log(this.ticks);
    }

}
