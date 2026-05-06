import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  updateLocalStorage,
  loadFromLocalStorage,
} from './lib/localStorage.js';
import { CurrentPage, ListItem } from './lib/types.js';

export default function App() {
  const [watchlist, setWatchlist] = useState<ListItem[]>(
    loadFromLocalStorage('kulturNotiertWatchlist') ?? [],
  );

  const [library, setLibrary] = useState<ListItem[]>(
    loadFromLocalStorage('kulturNotiertLibrary') ?? [],
  );

  const [itemToBeEdited, setItemToBeEdited] = useState<ListItem | null>(null);

  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');

  useEffect(() => {
    updateLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);

  useEffect(() => {
    updateLocalStorage('kulturNotiertLibrary', library);
  }, [library]);

  function addToWatchlist(newItem: ListItem) {
    setWatchlist([newItem, ...watchlist]);
  }

  function editWatchlist(editedItem: ListItem) {
    const updatedWatchlist = watchlist.filter(
      (item) => item.id !== editedItem.id,
    );
    setWatchlist([editedItem, ...updatedWatchlist]);
    setItemToBeEdited(null);
  }

  function removeFromWatchlist(itemToBeRemoved: ListItem) {
    const updatedWatchlist = watchlist.filter(
      (item) => item.id !== itemToBeRemoved.id,
    );
    setWatchlist(updatedWatchlist);
  }

  function checkItem(checkedItem: ListItem) {
    function currentRating() {
      return checkedItem.rating ? checkedItem.rating : 0;
    }

    if (watchlist.find((item) => item.id === checkedItem.id)) {
      const checkedItemWithRating: ListItem = {
        ...checkedItem,
        rating: currentRating(),
        listType: 'library',
      };
      setLibrary([checkedItemWithRating, ...library]);
      removeFromWatchlist(checkedItem);
    } else if (library.find((item) => item.id === checkedItem.id)) {
      setWatchlist([{ ...checkedItem, listType: 'watchlist' }, ...watchlist]);
      removeFromLibrary(checkedItem);
    }
  }

  function addToLibrary(newItem: ListItem) {
    setLibrary([newItem, ...library]);
  }

  function editLibrary(editedItem: ListItem) {
    const editedLibrary = library.filter((item) => item.id !== editedItem.id);
    setLibrary([editedItem, ...editedLibrary]);
    setItemToBeEdited(null);
  }

  function removeFromLibrary(itemToBeRemoved: ListItem) {
    const updatedLibrary = library.filter(
      (item) => item.id !== itemToBeRemoved.id,
    );
    setLibrary(updatedLibrary);
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home
            onSetCurrentPage={setCurrentPage}
            currentPage={currentPage}
            watchlist={watchlist}
            library={library}
            onCheckItem={checkItem}
            onAddToWatchlist={addToWatchlist}
            onEditWatchlist={editWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onAddToLibrary={addToLibrary}
            onEditLibrary={editLibrary}
            onRemoveFromLibrary={removeFromLibrary}
            onSetItemToBeEdited={setItemToBeEdited}
            itemToBeEdited={itemToBeEdited}
          />
        </Route>

        <Route path="/watchlist">
          <Watchlist
            onSetCurrentPage={setCurrentPage}
            currentPage={currentPage}
            watchlist={watchlist}
            onAddToWatchlist={addToWatchlist}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={setItemToBeEdited}
            onEditWatchlist={editWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onCheckItem={checkItem}
          />
        </Route>

        <Route path="/library">
          <Library
            onSetCurrentPage={setCurrentPage}
            currentPage={currentPage}
            library={library}
            onAddToLibrary={addToLibrary}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={setItemToBeEdited}
            onEditLibrary={editLibrary}
            onRemoveFromLibrary={removeFromLibrary}
            onCheckItem={checkItem}
          />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
