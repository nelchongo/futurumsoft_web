import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSectionService implements OnInit {

  constructor() {}
  ngOnInit(): void {}

  public titles = [{
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

  getTitles(){
    return this.titles
  }
}
