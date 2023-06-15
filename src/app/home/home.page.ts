import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titles = [{
    name: "Home",
    style: "title-selected"
  },
  {
    name: "About Us",
    style: "title"
  },
  {
    name: "Services",
    style: "title"
  },
  {
    name: "Tech Stack",
    style: "title"
  },
  {
    name: "Blogs",
    style: "title"
  },
  {
    name: "Contact Us",
    style: "title"
  }]

  constructor() {}

  scroll(event:any){
    console.log(event)
  }

}
