import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HighlightedParagraphComponent } from './highlighted-paragraph/highlighted-paragraph.component';
import { ToursComponent } from './tours/tours.component';
import { SafetyComponent } from './safety/safety.component';
import { FaqMeetingComponent } from './faq-meeting/faq-meeting.component';
import { FaqComponent } from './faq-meeting/faq/faq.component';
import { MeetingComponent } from './faq-meeting/meeting/meeting.component';
import { BookingContactComponent } from './booking-contact/booking-contact.component';
import { NavComponent } from './nav/nav.component';
import { TourCardsComponent } from './tours/tour-cards/tour-cards.component';
import { SafetyTilesComponent } from './safety/safety-tiles/safety-tiles.component';
import { QuestionTilesComponent } from './faq-meeting/faq/question-tiles/question-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HighlightedParagraphComponent,
    ToursComponent,
    SafetyComponent,
    FaqMeetingComponent,
    FaqComponent,
    MeetingComponent,
    BookingContactComponent,
    NavComponent,
    TourCardsComponent,
    SafetyTilesComponent,
    QuestionTilesComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
