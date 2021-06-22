import WatchlistForm from '../components/WatchlistForm';
import WatchlistCards from '../components/WatchlistCards';

export default function Watchlist({
  watchlist,
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  return (
    <main>
      <h2>Merkliste</h2>
      <WatchlistForm
        onAddToWatchlist={onAddToWatchlist}
        itemToBeEdited={itemToBeEdited}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onEditWatchlist={onEditWatchlist}
      />
      <WatchlistCards
        watchlist={watchlist}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}
