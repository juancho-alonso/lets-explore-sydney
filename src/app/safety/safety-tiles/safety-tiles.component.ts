import { Component } from '@angular/core';

@Component({
  selector: 'app-safety-tiles',
  templateUrl: './safety-tiles.component.html',
  styleUrls: ['./safety-tiles.component.scss']
})
export class SafetyTilesComponent {

  tilesArray = [
    {
      tileIcon:"fas fa-sun",
      tileTitle:"Sun Protection",
      tileParagraph:"We strongly encourage you to wear sunscreen and a hat to protect yourself from the stunning yet burning Australian sun!"
    },{
      tileIcon:"fas fa-cloud-rain",
      tileTitle:"Wet Weather",
      tileParagraph:"Check the local weather forecast before heading out for the tour. Prepare yourself with appropriate clothing for the day and weather. Remember to pack a wind jacket or rain-jacket when rain or winds are forecast."
    },{
      tileIcon:"fas fa-tint",
      tileTitle:"Hydration",
      tileParagraph:"The walks can range from a few hours to a whole day. Please bring a large water bottle (we recommend 1.5Lts). There are places to purchase or refill your water, however we always recommend having enough on you."      
    },{
      tileIcon:"fas fa-bolt",
      tileTitle:"Lightning",
      tileParagraph:"During severe lightning storms our guides will follow standard procedures to ensure the safety of all our guests. On the approach of a severe lightning storm, our guides will find a safe place to wait out the storm."
    },{
      tileIcon:"fas fa-shoe-prints",
      tileTitle:"Footwear",
      tileParagraph:"The walks can vary from concrete paths to gravel, steep areas and open rock. Please ensure you wear closed shoes, with ankle protection, good gripping soles. Strictly no thongs or sandals allowed."
    },{
      tileIcon:"fas fa-swimmer",
      tileTitle:"Swimming",
      tileParagraph:"Unfortunately, although we are walking past some of the worlds best beaches, swimming is not allowed during the walk."
    }]

}
