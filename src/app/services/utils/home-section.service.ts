import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSectionService implements OnInit {

  constructor() {}
  ngOnInit(): void {}

  public titles = [{
    id: 0,
    name: "Inicio",
    style: "title-selected"
  },
  {
    id: 1,
    name: "Conócenos",
    style: "title"
  },
  {
    id: 2,
    name: "Servicios",
    style: "title"
  },
  {
    id: 3,
    name: "Tecnologías",
    style: "title"
  },
  {
    id: 4,
    name: "Hablemos",
    style: "title"
  }]

  getTitles(){
    return this.titles
  }
}
