import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss'],
})
export class HomeTitleComponent  implements OnInit {

  @Input() title_type:String = 'blue';
  @Input() title_size:String = 'big';
  @Input() horizontal_alignment:String = 'left';
  @Input() vertical_alignment:String = 'middle';
  constructor() { }
  ngOnInit() {}

}
