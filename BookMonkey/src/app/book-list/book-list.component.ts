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
    this.books = [
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [new Thumbnail1 ('http://www.holzrad-pinneberg.de/raeder/r-bilder/delite-blue-g.jpg', 'nett')],
        'passt perfekt'
      ),
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [new Thumbnail1 ('https://followmestore.de/media/image/eb/cd/9d/riese-mueller-delite-dual-battery-grau_600x600.jpg', 'nett')],
        'passt perfekt'
      ),
      new Book(
        '8739989890',
        'Mein titel',
        ['christian Heinrich', 'sebastion', 'andreas'],
        new Date(2018, 2, 4),
        'bdkfadskjfsk wejwe f ejoewf  erhferng geroigne gerog',
        4,
        [new Thumbnail1 ('https://www.greenfinder.de/typo3temp/_processed_/csm_3f40177c22313a903ea93c0647bcee4b_742aa1b656.jpg', 'nett')],
        'passt perfekt'
      )
    ];
  }

}
