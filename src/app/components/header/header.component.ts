import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  
  // @ViewChild(IonContent, { static: false }) content: IonContent;
  @Input() titles = [{
    name: "Home",
    style: "title-selected"
  }]

  constructor() { }

  ngOnInit() {}

  clickOntitle(selected_title:any){
    this.titles.forEach(title => {
      if (title.name == selected_title.name){
        title.style = "title-selected";
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
