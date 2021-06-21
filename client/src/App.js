import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

import { updateLocalStorage, loadFromLocalStorage } from './lib/localStorage';

export default function App() {
  const [watchlist, setWatchlist] = useState(
    loadFromLocalStorage('kulturNotiertWatchlist') ?? []
  );

  const [library, setLibrary] = useState(
    loadFromLocalStorage('kulturNotiertLibrary') ?? []
  );

  const [itemToBeEdited, setItemToBeEdited] = useState();

  useEffect(() => {
    updateLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);

  useEffect(() => {
    updateLocalStorage('kulturNotiertLibrary', library);
  }, [library]);

  function addToWatchlist(newItem) {
    setWatchlist([newItem, ...watchlist]);
  }

  function removeFromWatchlist(itemToBeRemoved, indexToBeRemoved) {
    const updatedWatchlist = watchlist.filter(
      (item, index) => index !== indexToBeRemoved
    );
    setWatchlist(updatedWatchlist);
  }

  function checkItem(event, checkedItem, checkedIndex) {
    const isDone = event.target.name;
    const doneStatus = event.target.checked;

    const newLibraryItem = watchlist.find(
      (item, index) => index === checkedIndex
    );
    newLibraryItem[isDone] = doneStatus;
    setLibrary([newLibraryItem, ...library]);

    removeFromWatchlist(checkedItem, checkedIndex);
  }

  function addToLibrary(newItem) {
    setLibrary([newItem, ...library]);
  }

  function editWatchlist(editedItem) {
    const editedWatchlist = watchlist.slice();
    const indexToBeEdited = itemToBeEdited[1];
    editedWatchlist[indexToBeEdited] = editedItem;
    setWatchlist(editedWatchlist);
    setItemToBeEdited();
  }

  function editLibrary(editedItem) {
    const editedLibrary = library.slice();
    const indexToBeEdited = itemToBeEdited[1];
    editedLibrary[indexToBeEdited] = editedItem;
    setLibrary(editedLibrary);
    setItemToBeEdited();
  }

  function removeFromLibrary(itemToBeRemoved, indexToBeRemoved) {
    const updatedLibrary = library.filter(
      (item, index) => index !== indexToBeRemoved
    );
    setLibrary(updatedLibrary);
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/watchlist">
          <Watchlist
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
            library={library}
            onAddToLibrary={addToLibrary}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={setItemToBeEdited}
            onEditLibrary={editLibrary}
            onRemoveFromLibrary={removeFromLibrary}
          />
        </Route>

        <Route path="/friends">
          <Friends />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
