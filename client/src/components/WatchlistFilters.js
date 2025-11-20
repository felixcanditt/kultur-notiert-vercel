import { categories } from "../lib/categories";

export default function WatchlistFilters({ onSetFilter }) {
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
