import { Thumbnail1 } from './thumbnail';
export { Thumbnail1 } from './thumbnail';

export class Book {
    constructor(
        public isbn: string,
        public title: string,
        public authors: string[],
        public published: Date,
        public subtitle?: string,
        public rating?: number,
        public thumbnails?: Thumbnail1[],
        public descriptions?: string
    ) {}
}
