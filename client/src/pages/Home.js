import { useState, useEffect } from 'react';

import WatchlistCards from '../components/WatchlistCards';
import LibraryCards from '../components/LibraryCards';

export default function Home({
  onSetPage,
  watchlist,
  library,
  onSetItemToBeEdited,
  onRemoveFromWatchlist,
  onRemoveFromLibrary,
  onCheckItem
}) {
  useEffect(() => {
    onSetPage('home');
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);

  return (
    <>
      <main>
        <h2>Meine letzten Einträge</h2>

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
      </main>
    </>
  );
}
