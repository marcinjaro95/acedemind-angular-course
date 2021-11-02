import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() startEvent = new EventEmitter<number>();
  lastNumber: number = 0;
  intervalRef: any;
  constructor() {}

  onStartClick() {
    this.intervalRef = setInterval(() => {
      this.startEvent.emit(this.lastNumber++)
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.intervalRef);
  }

}
