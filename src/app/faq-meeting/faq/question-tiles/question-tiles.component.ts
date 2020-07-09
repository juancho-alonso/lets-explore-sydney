import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-question-tiles',
  templateUrl: './question-tiles.component.html',
  styleUrls: ['./question-tiles.component.scss']
})
export class QuestionTilesComponent {

  showAnswer = false;

  questionsArray = [
    {
      questionTitle:"Where do we meet?",
      questionAnswer:"For the Bondi to Coogee walk, we meet at Bondi Icebergs. Information regarding other meeting points will be sent to you via email once your booking is confirmed. Check junk email just in case!"
    },
    {
      questionTitle:"What should I bring?",
      questionAnswer:"Good walking shoes (thongs not permitted), water bottle (we will pass a number of water fountains), sunscreen, hats, sunglasses, light snacks, swimmers and towel."
    },
    {
      questionTitle:"Do I need to book?",
      questionAnswer:"Yes. We recommend booking your guided tour as early as possible to ensure you get a place. If you’d like to book at the last minute, just follow the booking instructions and we’ll see you at one of the starting points!"
    },
    {
      questionTitle:"Can I change my booking?",
      questionAnswer:"Sure can! We understand that sometimes last minute events can change your plans. As long as you are no less than 48 hours from the time of your booking, you can log on to your booking page and change to a more convenient time or date!"
    },
    {
      questionTitle:"Do you walk in all weather?",
      questionAnswer:"Of course! Lets Explore Sydney is as good in the warm summer sun as it is in the cold wintery rain. Whatever the weather, unless a major danger is forecast, we will proceed with our walks."
    },
    {
      questionTitle:"How does cancelation work?",
      questionAnswer:"If you can no longer attend our walk, you may cancel your booking up to 48 hours prior."
    },
    {
      questionTitle:"What about kids?",
      questionAnswer:"Whilst we don’t allow prams or wheelchairs (due to the terrain and stairs on the walk) we have a happy policy that all kids under 12 (as long as they are accompanied by an adult), have free entry to our tours (Subject to available spaces). Please also note that any child under 18 must also be accompanied by an adult."
    }]

  constructor(private renderer:Renderer2) { }

  toggle(event:any){
    this.showAnswer =! this.showAnswer;
    if(this.showAnswer){
      this.renderer.addClass(event.target.parentNode,"question-tile-shown");
      this.renderer.removeClass(event.target.parentNode,"question-tile");
    } else if (!this.showAnswer) {
      this.renderer.removeClass(event.target.parentNode,"question-tile-shown");
      this.renderer.addClass(event.target.parentNode,"question-tile");
     }
  }
}
