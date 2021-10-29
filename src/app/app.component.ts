import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  toggle: boolean = false;
  counter: number = 0;
  clicksArray: number[] = [];

  onClickDetailsBtn() {
    this.clicksArray.push(this.counter++);
    this.toggle = !this.toggle;
  }
}
