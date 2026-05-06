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

export interface BaseListItem {
  title: string;
  id: string;
  category: string;
}

export interface WatchlistItem extends BaseListItem {
  author: string;
  director: string;
  creator: string;
  location: string;
  time: string;
}

export interface LibraryItem extends BaseListItem {
  rating: number;
  notes: string;
}
