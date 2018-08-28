import { Component, OnInit } from '@angular/core';

import { Book, Thumbnail } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];
  ngOnInit() {
    this.books = [
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [], //new Thumbnail ('https://img.zeit.de/kultur/2018-03/bild-1/square__220x220__desktop', 'nett')],
        'passt perfekt'
      )
    ];
  }

}
