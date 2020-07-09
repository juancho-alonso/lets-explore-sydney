import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @Output() buttonTrips = new EventEmitter<string>();

  ngAfterViewInit(){
    var video = document.querySelector('video');
    if (video) {
        video.muted = true;
    }
  }

 onButtonScroll(){
  this.buttonTrips.emit('trips');
}

}
