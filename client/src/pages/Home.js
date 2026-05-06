import { useState, useEffect } from 'react';

import WatchlistCards from '../components/WatchlistCards.tsx';
import LibraryCards from '../components/LibraryCards.tsx';
import WatchlistForm from '../components/WatchlistForm.tsx';
import LibraryForm from '../components/LibraryForm.tsx';

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
}) {
  useEffect(() => {
    onSetCurrentPage('home');
    onSetItemToBeEdited('');
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
          watchlist={watchlist}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onSetFormOnScreen={setFormOnScreen}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
          onCheckItem={onCheckItem}
        />

        <LibraryCards
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
