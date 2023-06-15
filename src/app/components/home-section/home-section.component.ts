import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent  implements OnInit {

  @Input() section:String = "section-1"

  constructor() {}

  ngOnInit() {}

}
