import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slideIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.carousel();
  }

  carousel() {
    var pictures = document.querySelectorAll<HTMLImageElement>(".pic-auto");
    var dots = document.querySelectorAll<HTMLElement>(".intro-section-dot");
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";
      dots[i].style.backgroundColor = "#D0D0D0";
    }
  
    this.slideIndex++
    if (this.slideIndex > pictures.length) {
        this.slideIndex = 1
      }
    pictures[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].style.backgroundColor = "#3A3A3C";
    setTimeout(this.carousel.bind(this), 3000); 
  }
}
