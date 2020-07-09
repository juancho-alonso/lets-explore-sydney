import { Component } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent {

  clicksSafety:number = 0;
  viewportWidth:any = window.innerWidth;

  slideTileLeft(){
    var sliderSafety = document.querySelector<HTMLElement>(".safety-tiles-container")
  
      this.clicksSafety++;
      if (this.viewportWidth > 900 && this.clicksSafety >= 3) {
          this.clicksSafety = 3;
      } else if (this.viewportWidth < 900 && this.viewportWidth > 600 && this.clicksSafety >= 4){
              this.clicksSafety = 4;
          } else if (this.viewportWidth < 420 && this.clicksSafety >= 5){
              this.clicksSafety = 5;
          } ;
      sliderSafety.style.left = -255 * this.clicksSafety + "px";
  }
  
  slideTileRight(){
    var sliderSafety = document.querySelector<HTMLElement>(".safety-tiles-container")
  
      this.clicksSafety--;
      if (this.viewportWidth > "420" && this.clicksSafety <= 0){
          this.clicksSafety = 0;
      } else if (this.viewportWidth < "420" && this.clicksSafety <= 0){
          this.clicksSafety = 0;
      };
      sliderSafety.style.left = -255 * this.clicksSafety + "px";
  }
}
