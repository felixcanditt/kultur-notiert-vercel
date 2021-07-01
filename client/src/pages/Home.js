import { useState, useEffect } from 'react';

import WatchlistCards from '../components/WatchlistCards';
import LibraryCards from '../components/LibraryCards';
import WatchlistForm from '../components/WatchlistForm';
import LibraryForm from '../components/LibraryForm';

export default function Home({
  onSetCurrentPage,
  watchlist,
  library,
  onCheckItem,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onEditLibrary,
  onRemoveFromLibrary,
  onSetItemToBeEdited,
  itemToBeEdited
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
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditWatchlist={onEditWatchlist}
          />
        )}
        {formToBeShown === 'library' && (
          <LibraryForm
            onSetFormOnScreen={setFormOnScreen}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditLibrary={onEditLibrary}
          />
        )}
      </main>
    </>
  );
}
