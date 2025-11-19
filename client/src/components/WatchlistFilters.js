export default function WatchlistFilters({ onSetFilter }) {
  function filterList(selectedFilter) {
    onSetFilter(selectedFilter);
  }
  return (
    <>
      <button onClick={() => filterList("book")}>Bücher</button>
      <button onClick={() => filterList("movie")}>Film</button>
      <button onClick={() => filterList("")}>X</button>
    </>
  );
}
