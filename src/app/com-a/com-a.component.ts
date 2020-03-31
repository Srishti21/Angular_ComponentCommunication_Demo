import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-a',
  templateUrl: './com-a.component.html',
  styleUrls: ['./com-a.component.css']
})
export class ComAComponent implements OnInit {
  //@Input()  name: string;
  @Output() isTimelineShown = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
    this.isTimelineShown.emit(true);
  }

}
