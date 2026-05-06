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

export interface ListItem {
  title: string;
  id: string;
  category?: CategoryName;

  author?: string;
  director?: string;
  creator?: string;
  location?: string;
  time?: string;

  rating?: number;
  notes?: string;
}
