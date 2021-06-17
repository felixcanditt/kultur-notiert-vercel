import WatchlistForm from '../components/WatchlistForm';
import WatchlistCards from '../components/WatchlistCards';

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
      <WatchlistCards
        watchlist={watchlist}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}
