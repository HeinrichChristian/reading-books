import { Book } from './shared/book';
import { Component } from '@angular/core';



@Component({
  selector: 'bm-root',
  template:
  `<bm-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></bm-book-list>
  <bm-book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"></bm-book-details>`,
  styles: []
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  title = 'BookMonkey';

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
