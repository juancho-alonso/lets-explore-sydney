import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements AfterViewInit {
  
  map: google.maps.Map;
  lat = -33.895241;
  lng = 151.274413;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15,
    disableDefaultUI: true
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  @ViewChild("mapContainer") gmap:ElementRef;

  ngAfterViewInit(){
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  
   }
}
