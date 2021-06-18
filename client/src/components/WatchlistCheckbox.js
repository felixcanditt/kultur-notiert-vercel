export default function WatchlistCheckbox({ item, index, onCheckItem }) {
  return (
    <label>
      <input
        type="checkbox"
        name="isWatched"
        checked={item.isWatched}
        onChange={(event) => onCheckItem(event, item, index)}
      />
      {item.category === '' ? 'gesehen' : ''}
      {item.category === 'book' ? 'gelesen' : ''}
      {item.category === 'movie' ? 'angesehen' : ''}
      {item.category === 'series' ? 'angesehen' : ''}
      {item.category === 'stage' ? 'angesehen' : ''}
      {item.category === 'exhibition' ? 'besucht' : ''}
      {item.category === 'festival' ? 'besucht' : ''}
    </label>
  );
}
