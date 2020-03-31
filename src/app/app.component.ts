import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommunication';
  timelineStatus = false;
  

  onTimelineClick(timelineStatus: boolean) {
    this.timelineStatus = timelineStatus;
  }
}
