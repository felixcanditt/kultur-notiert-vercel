import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import WatchlistItems from '../components/WatchlistItems';

export default function Watchlist({
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  return (
    <main>
      <h2>Merkliste</h2>
      <WatchlistForm onAddToWatchlist={onAddToWatchlist} />
      <WatchlistItems
        watchlist={watchlist}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}
