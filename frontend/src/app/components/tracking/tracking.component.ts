import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
    user = null;
    topics: Observable<any[]>;
    gpsCoordinates: Observable<any[]>;

    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    constructor(public db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.db.list('/').valueChanges().subscribe(console.log);
        this.db.list('/TRAILER_1/GPS').valueChanges().subscribe(console.log);
        this.topics = this.db.list('/TRAILER_1').valueChanges();
        this.gpsCoordinates = this.db.list('/TRAILER_1/GPS').valueChanges();

        var mapProp = {
            center: new google.maps.LatLng(51.5793, 4.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
}


