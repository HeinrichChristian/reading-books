import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  template:
  `<bm-book-list *ngIf="listOn"></bm-book-list>
  <bm-book-details *ngIf="detailsOn"></bm-book-details>`,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  title = 'BookMonkey';
  number = 1;
  clickMe() {
    this.number += 1;
  }
  reduce() {
    this.number = 0;
  }

}
