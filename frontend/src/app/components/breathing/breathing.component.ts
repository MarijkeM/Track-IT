import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-breathing',
  templateUrl: './breathing.component.html',
  styleUrls: ['./breathing.component.css']
})
export class BreathingComponent implements OnInit {

  ticks = 0;

  constructor() { }

  ngOnInit() {


  }

  onClickStart(){
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>this.ticks = t);
  }

  onClickStop(){
    console.log(this.ticks);
  }

}
