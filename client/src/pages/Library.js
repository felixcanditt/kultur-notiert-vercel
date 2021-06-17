import WatchlistCards from '../components/WatchlistCards';

export default function Library({
  watchlist,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  const watchedOnly = watchlist.filter((item) => item.isWatched);
  console.log(watchedOnly);

  return (
    <main>
      <h2>Meine Sammlung</h2>
      {watchedOnly.map((item) => (
        <p>{item.title}</p>
      ))}
      <p>Stop</p>
      {watchlist.map((item) => (
        <p>{item.title}</p>
      ))}
      <p>Stop</p>
      <WatchlistCards
        watchlist={watchlist}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}
