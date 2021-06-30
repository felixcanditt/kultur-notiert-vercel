import CardCategory from './CardCategory';

import { displayDetails } from '../lib/displayCard';

export default function WatchlistCardDetails({ item }) {
  return (
    <>
      <CardCategory item={item} />

      {displayDetails(item)}
    </>
  );
}
