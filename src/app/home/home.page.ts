import { Component, HostListener } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titles = [{
    id: 0,
    name: "Home",
    style: "title-selected"
  },
  {
    id: 1,
    name: "About Us",
    style: "title"
  },
  {
    id: 2,
    name: "Services",
    style: "title"
  },
  {
    id: 3,
    name: "Tech Stack",
    style: "title"
  },
  {
    id: 4,
    name: "Contact Us",
    style: "title"
  }]

  constructor() {}

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    var search_title:Number = 0;
    var check_number = 930
    if(ev.detail.currentY >= 0 && ev.detail.currentY <= check_number){
      search_title = 0
    }
    if(ev.detail.currentY >= check_number && ev.detail.currentY <= check_number*2){
      // About Us
      search_title = 1
    }
    if(ev.detail.currentY >= check_number*2 && ev.detail.currentY <= check_number*3){
      // Services
      search_title = 2
    }
    if(ev.detail.currentY >= check_number*3 && ev.detail.currentY <= check_number*4){
      // Tech Stack
      search_title = 3
    }
    if(ev.detail.currentY >= check_number*4 && ev.detail.currentY <= check_number*5){
      // Contact Us
      search_title = 4
    }

    this.titles.map((obj) => {obj.style = (obj.id == search_title) ? 'title-selected' : 'title'})
  }

}
