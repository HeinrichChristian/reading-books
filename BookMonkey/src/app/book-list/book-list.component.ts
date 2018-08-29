import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { Thumbnail1 } from '../shared/thumbnail';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {
  books: Book[];
  ngOnInit() {
    const thumb1 = new Thumbnail1 ('https://img.zeit.de/kultur/2018-03/bild-1/square__220x220__desktop', 'nett');
    const thumbnails: Array<Thumbnail1> = [thumb1];
    // new Thumbnail ('https://img.zeit.de/kultur/2018-03/bild-1/square__220x220__desktop', 'nett')];
    this.books = [
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        thumbnails, // new Thumbnail ('https://img.zeit.de/kultur/2018-03/bild-1/square__220x220__desktop', 'nett')],
        'passt perfekt'
      ),
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [new Thumbnail1 ('http://chismosocantu.com/wp-content/uploads/2018/03/Charlotte-McKinney-una-gran-y-enorme-modelo.jpg', 'nett')],
        'passt perfekt'
      ),
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [new Thumbnail1 ('https://www.usmagazine.com/wp-content/uploads/1329233840_kate-upton-swimwear01-lg.jpg', 'nett')],
        'passt perfekt'
      )
    ];
  }

}
