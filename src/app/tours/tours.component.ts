import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent {

@Output() buttonBook = new EventEmitter<string>();

  viewportWidth:any = window.innerWidth;
  clicksTour:number = 0;

  onButtonScroll(){
    this.buttonBook.emit('contact');
  }

  slideTourLeft(){
    var sliderTour = document.querySelector<HTMLElement>(".tours-container")
      
    this.clicksTour++;
      if (this.viewportWidth > 900 && this.clicksTour >= 3) {
          this.clicksTour = 3;
      } else if (this.viewportWidth > 420 && this.clicksTour >= 4){
              this.clicksTour = 4;
          } else if (this.viewportWidth < 420 && this.clicksTour >= 5){
              this.clicksTour = 5;
          } ;
      sliderTour.style.left = -300 * this.clicksTour + "px";
  }
  
  slideTourRight(){
    var sliderTour = document.querySelector<HTMLElement>(".tours-container")
  
      this.clicksTour--;
      if (this.viewportWidth > 420 && this.clicksTour <= 0){
          this.clicksTour = 0;
      } else if (this.viewportWidth < 420 && this.clicksTour <= 0){
          this.clicksTour = 0;
      };
      sliderTour.style.left = -300 * this.clicksTour + "px";
  }
  
}
