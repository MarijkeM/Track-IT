import { Component, OnInit } from '@angular/core';
import {GoodEvent} from '../../models/goodEvent.model'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-good-events',
  templateUrl: './good-events.component.html',
  styleUrls: ['./good-events.component.css']
})
export class GoodEventsComponent implements OnInit {
  goodEvent: GoodEvent;
  events: GoodEvent[] = [{content:"Ik ben naar de markt geweest en het was heel gezellig", date:this.getToday()}];
  content: String;
  date: Date;

  constructor(private flashMessage: FlashMessagesService) { }


  ngOnInit() {
    if(localStorage.getItem('events')){
      this.halenVanLocalStorage();
    }
  }

  onEventSubmit(event){
    if(this.content != null){
      this.goodEvent= {
        content: this.content,
        date: "probeersel"
      };

      this.events.unshift({
        content: this.content,
        date: this.getToday()
      });

      this.opslagenInLocalStorage();
    }

    var form = <HTMLFormElement>document.getElementById('eventform');
    form.reset();
    event.preventDefault();

  }

  getToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    }

    if(mm<10) {
      mm = '0'+mm
    }
    return today = dd + '/' + mm + '/' + yyyy;
  }

  opslagenInLocalStorage(){
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  halenVanLocalStorage(){
    this.events = JSON.parse(localStorage.getItem('events'));
  }

  removeLocalStorage(){
    localStorage.removeItem('events');
  }
}
