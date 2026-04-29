import CardCategory from './CardCategory';

import { displayWatchlistDetails } from '../lib/displayCard';

export default function WatchlistCardDetails({ item }) {
  return (
    <>
      {item.category && <CardCategory item={item} />}

      {displayWatchlistDetails(item)}
    </>
  );
}
