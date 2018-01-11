import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs'
import {Router} from '@angular/router';


@Component({
    selector: 'app-breathing',
    templateUrl: './breathing.component.html',
    styleUrls: ['./breathing.component.css']
})
export class BreathingComponent implements OnInit, OnDestroy {

    ticks: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    icons: number[];

    whenToStop: number = 2;

    breatheCue: string = "Laten we beginnen!";

    sub: Subscription;

    timer = Observable.timer(0, 1000);

    constructor(private router: Router) {
    }

    ngOnInit() {
    }


    private getSeconds(ticks: number) {
        return ticks % 60;
    }

    private getMinutes(ticks: number) {
        return (Math.floor(ticks / 60)) % 60;
    }

    onClickStart() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
            this.sub = this.timer.subscribe(
                t => {
                    this.ticks = t;

                    this.seconds = this.getSeconds(this.ticks);
                    this.minutes = this.getMinutes(this.ticks);

                    if(this.minutes == this.whenToStop){
                        this.stop();
                    }else if (this.ticks % 5 == 0) {
                        this.toggleBreathe();
                    }

                    this.printIcons(this.ticks);
                }
            );
    }

    printIcons(ticks){
        var number = ticks %5;
        this.icons = [];
        for(var i = 0; i<= number; i++){
            this.icons.push(number)
        }
    }

    toggleBreathe() {
        this.playBeep();
        if (this.breatheCue == "Adem in") {
            this.breatheCue = "Adem uit";
        } else {
            this.breatheCue = "Adem in";
        }
    }

    stop(){
        this.onClickReset();
        this.breatheCue = "Klaar!";
        this.playEndTune();
    }

    playEndTune(){
        var audio = new Audio();
        audio.src = "../../../assets/TempleBell.mp3"
        audio.load();
        audio.play();
    }

    playBeep() {
        var audio = new Audio();
        audio.src = "../../../assets/Tone.mp3";
        audio.load();
        audio.play();
    }


    onClickFirst(time){
        this.whenToStop = time;
    }
    onClickSecond(time){
        this.whenToStop = time;
    }
    onClickThird(time){
        this.whenToStop = time;
    }


    onClickReset() {
        console.log("Reset");
        this.reset();
    }

    reset(){
        this.unsubscribe();
        this.seconds = 0;
        this.minutes = 0;
    }

    unsubscribe() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }


    ngOnDestroy() {
        this.reset()
    }


}
