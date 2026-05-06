import { useState, useEffect } from 'react';

import WatchlistCards from '../components/WatchlistCards';
import LibraryCards from '../components/LibraryCards';
import WatchlistForm from '../components/WatchlistForm';
import LibraryForm from '../components/LibraryForm';
import { ListItem, CurrentPage, CategoryName } from '../lib/types';

type Props = {
  onAddToLibrary: (value: ListItem) => void;
  onEditLibrary: (value: ListItem) => void;
  itemToBeEdited: ListItem;
  onSetItemToBeEdited: (value: null | ListItem) => void;
  onCheckItem: (value: ListItem) => void;
  currentPage: CurrentPage;
  library: ListItem[];
  watchlist: ListItem[];
  onAddToWatchlist: (value: ListItem) => void;
  onEditWatchlist: (value: ListItem) => void;
  onRemoveFromWatchlist: (value: ListItem) => void;
  onRemoveFromLibrary: (value: ListItem) => void;
  onSetCurrentPage: (value: CurrentPage) => void;
};

export default function Home({
  onSetCurrentPage,
  watchlist,
  library,
  onCheckItem,
  onAddToWatchlist,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onAddToLibrary,
  onEditLibrary,
  onRemoveFromLibrary,
  onSetItemToBeEdited,
  itemToBeEdited,
}: Props) {
  useEffect(() => {
    onSetCurrentPage('home');
    onSetItemToBeEdited(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);
  const [formToBeShown, setFormToBeShown] = useState('none');

  useEffect(() => {
    if (itemToBeEdited) {
      if (watchlist.find((item) => item.id === itemToBeEdited.id)) {
        setFormToBeShown('watchlist');
      } else if (library.find((item) => item.id === itemToBeEdited.id)) {
        setFormToBeShown('library');
      }
    } else {
      setFormToBeShown('none');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formOnScreen]);

  return (
    <>
      <main>
        <h2>
          Meine letzten <br /> Einträge
        </h2>

        <WatchlistCards
          currentPage="home"
          watchlist={watchlist}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onSetFormOnScreen={setFormOnScreen}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
          onCheckItem={onCheckItem}
        />

        <LibraryCards
          currentPage="home"
          library={library}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onSetFormOnScreen={setFormOnScreen}
          onRemoveFromLibrary={onRemoveFromLibrary}
          onCheckItem={onCheckItem}
        />

        {formToBeShown === 'watchlist' && (
          <WatchlistForm
            onSetFormOnScreen={setFormOnScreen}
            onAddToWatchlist={onAddToWatchlist}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditWatchlist={onEditWatchlist}
          />
        )}
        {formToBeShown === 'library' && (
          <LibraryForm
            onSetFormOnScreen={setFormOnScreen}
            onAddToLibrary={onAddToLibrary}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditLibrary={onEditLibrary}
          />
        )}
      </main>
    </>
  );
}
