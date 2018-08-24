import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'BookMonkey';
  number = 1;
  clickMe() {
    this.number += 1;
  }
  reduce() {
    this.number = 0;
  }

}
