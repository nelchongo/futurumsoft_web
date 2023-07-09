import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { HomeSectionService } from '../services/utils/home-section.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private homeSectionService: HomeSectionService) {}

  ngOnInit(): void {
    this.changeFront()
  }

  titles = this.homeSectionService.getTitles();
  selectFrontMessage:number = 0;
  frontMessages = ["Creación de App", "Inteligencia de Negocio", "Marketing Digital"];

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }

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

  async changeFront(){
    while(true){
      await this.delay(5000);
      if(this.selectFrontMessage == 2){
        this.selectFrontMessage = 0;
      }else{
        this.selectFrontMessage+=1;
      }
    }
  }
}
