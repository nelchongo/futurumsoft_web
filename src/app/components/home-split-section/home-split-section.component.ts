import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-split-section',
  templateUrl: './home-split-section.component.html',
  styleUrls: ['./home-split-section.component.scss'],
})
export class HomeSplitSectionComponent  implements OnInit {

  @Input() section:String = "white"
  @Input() split:boolean = true
  constructor() { }
  ngOnInit() {}

}
