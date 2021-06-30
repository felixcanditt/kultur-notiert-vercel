import CardCategory from './CardCategory';

import { displayDetails } from '../lib/displayCard';

export default function WatchlistCardDetails({ item }) {
  return (
    <>
      {item.category && <CardCategory item={item} />}

      {displayDetails(item)}
    </>
  );
}
