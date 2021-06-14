import Watchlist from '../models/watchlist.model.js';

export function getWatchlist(request, response) {
  Watchlist.find().then((watchlist) => response.json(watchlist));
}

export function addToWatchlist(request, response) {
  const newItem = new Watchlist({
    title: request.body.title,
    category: request.body.category
  });
  newItem
    .save()
    .then((savedItem) => response.json(savedItem))
    .catch((error) => res.json(error.message));
}

export function removeFromWatchlist(request, response) {
  const { itemId } = request.params;
  Watchlist.findByIdAndDelete({ _id: itemId }, (error, doc) =>
    response.json({
      success: true,
      message: `The item has been deleted.`,
      data: doc
    })
  );
}
