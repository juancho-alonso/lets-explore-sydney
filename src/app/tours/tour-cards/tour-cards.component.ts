import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-cards',
  templateUrl: './tour-cards.component.html',
  styleUrls: ['./tour-cards.component.scss']
})
export class TourCardsComponent {

  toursArray = [{
    tourImg:"../assets/les-bondi-to-coogee.jpg",
    tourTitle:"BONDI TO COOGEE",
    tourType:"Half Day",
    tourDuration:"3-4 hours",
    tourFitness:"Medium",
    tourPrice:"200pp"
  },{
    tourImg:"../assets/les-blue-mountains.jpg",
    tourTitle:"BLUE MOUNTAINS",
    tourType:"Full Day",
    tourDuration:"8-9 hours",
    tourFitness:"High",
    tourPrice:"700pp"
  },{
    tourImg:"../assets/les-coogee-to-bondi.jpg",
    tourTitle:"COOGEE TO BONDI",
    tourType:"Half Day",
    tourDuration:"3-4 hours",
    tourFitness:"Medium",
    tourPrice:"200pp"
  },{
    tourImg:"../assets/les-malabar-headland.jpg",
    tourTitle:"MALABAR HEADLAND",
    tourType:"Full Day",
    tourDuration:"10-12 hours",
    tourFitness:"Medium",
    tourPrice:"270pp"
  },{
    tourImg:"../assets/les-south-coast.jpg",
    tourTitle:"SOUTH COAST",
    tourType:"Full Day",
    tourDuration:"7-8 hours",
    tourFitness:"Medium",
    tourPrice:"270pp"
  },{
    tourImg:"../assets/les-royal-national-park.jpg",
    tourTitle:"ROYAL NATIONAL PARK",
    tourType:"Full Day",
    tourDuration:"8-9 hours",
    tourFitness:"High",
    tourPrice:"300pp"
  }]

}
