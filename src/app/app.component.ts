import { Component } from '@angular/core';
import { HomeSectionService } from './services/utils/home-section.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private homeSectionService: HomeSectionService) {}

  titles = this.homeSectionService.getTitles();

  clickOntitle(selected_title:any){
    this.titles.forEach(title => {
      if (title.name == selected_title.name){
        // title.style = "title-selected";
        var id = document.getElementById(selected_title.name);
        if(id){
          id.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
        }
      }else{
        title.style = "title";
      }
    })
  }  
}
