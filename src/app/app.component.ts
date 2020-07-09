import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lets-explore-sydney';

  @ViewChild("home") home;
  @ViewChild("about") about;
  @ViewChild("trips") trips;
  @ViewChild("safety") safety;
  @ViewChild("contact") contact;


  ngOnInit(){
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    }
  }

//-----------------------NAVIGATION-------------------------
   
public navigate(element: string) {
  this[element].nativeElement.scrollIntoView({behavior: 'smooth'});
}

public navigateMobile(element: string) {
  this[element].nativeElement.scrollIntoView({behavior: 'smooth'});
} 

public buttonScroll(element: string) {
    this[element].nativeElement.scrollIntoView({behavior: 'smooth'});
}

}

