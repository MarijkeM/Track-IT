import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {} from '@types/googlemaps';

@Component({
    selector: 'app-tracking',
    templateUrl: './tracking.component.html',
    styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {
    gpsCoordinates: Observable<any[]>;
    location: any;
    timestamp: number;
    time: Date;
    longitude: number;
    lattitude: number;
    mode: number;
    coordinatesArray: any;
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    constructor(public db: AngularFireDatabase) {
    }

    ngOnInit() {
        try {
            this.connectionFirebase();
            console.log("coordinates: " + this.lattitude + " " + this.longitude);
        }
        catch (e) {
            console.log(e);
        }

        this.initializeMap(51.3084, 4.8907);
    }

    connectionFirebase() {
        // Firebase in observable
        this.gpsCoordinates = this.db.list('/TRAILER_1/GPS').valueChanges()

        try {
            this.gpsCoordinates.forEach(d => {
                this.timestamp = d[d.length.valueOf() - 1].valueOf();
                this.time = new Date(this.timestamp);
                this.location = d[d.length.valueOf() - 2].valueOf();
                this.mode = this.location["Mode"];
                this.coordinatesArray = this.location["GPS"].split(/' '|","|\n|\t/);
                this.lattitude = this.coordinatesArray[0];
                this.longitude = this.coordinatesArray[1];
                return true;
            });
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    initializeMap(lat, long) {
        var myLatlng = new google.maps.LatLng(lat, long);

        var mapProp = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Last location"
        });

        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        marker.setMap(this.map);
    }
}


