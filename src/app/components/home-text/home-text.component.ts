import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.scss'],
})
export class HomeTextComponent  implements OnInit {

  @Input() text_align:String = 'left'
  @Input() text_size:String = 'small'
  constructor() { }
  ngOnInit() {}

}
