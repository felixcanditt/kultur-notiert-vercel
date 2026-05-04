export type CategoryName =
  | 'book'
  | 'movie'
  | 'series'
  | 'music'
  | 'stage'
  | 'exhibition'
  | 'festival'
  | 'miscellaneous';

export interface Category {
  name: CategoryName;
  text:
    | 'Buch'
    | 'Film'
    | 'Serie'
    | 'Musik'
    | 'Bühne'
    | 'Ausstellung'
    | 'Festival'
    | 'Sonstiges';
}

export interface WatchlistItem {
  title: string;
  id: string;
  category: string;
  author: string;
  director: string;
  creator: string;
  location: string;
  time: string;
}
