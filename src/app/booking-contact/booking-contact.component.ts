import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-contact',
  templateUrl: './booking-contact.component.html',
  styleUrls: ['./booking-contact.component.scss']
})
export class BookingContactComponent {

  checkInputs(){
    var inputs = document.querySelectorAll<HTMLInputElement>(".inputs");
      for (let i = 0; i < inputs.length; i++) {    
          if (inputs[i].value === ""){
              inputs[i].style.boxShadow = "0px 0px 2px 2px rgba(255,0,0,1)";
          } else if (inputs[i].value !== ""){
              inputs[i].style.boxShadow = "none";
          }
      }
  }
}
