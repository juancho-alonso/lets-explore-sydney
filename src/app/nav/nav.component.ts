import { Component, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  showMenu = false;

  @Output() navScroll = new EventEmitter<any>();
  @Output() navMobile = new EventEmitter<any>();


  @ViewChild("home") home;
  @ViewChild("about") about;
  @ViewChild("trips") trips;
  @ViewChild("safety") safety;
  @ViewChild("contact") contact;

  onNavScroll(event){
    this.navScroll.emit(event.target.dataset.id);    
  }
  
  onNavMobile(event){
    this.navMobile.emit(event.target.dataset.id);
    this.showMenu = !this.showMenu;    
  }


  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  

}
