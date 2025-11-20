export default function WatchlistFilters({ onSetFilter }) {
  const categories = [
    {
      name: "book",
      text: "Buch",
    },
    {
      name: "movie",
      text: "Film",
    },
  ];

  function filterList(selectedFilter) {
    onSetFilter(selectedFilter);
  }
  return (
    <>
      <ul>
        {categories.map((item) => (
          <li>
            <button onClick={() => filterList(item.name)}>{item.text}</button>
          </li>
        ))}
        <li>
          <button onClick={() => filterList("")}>X</button>
        </li>
      </ul>
    </>
  );
}
