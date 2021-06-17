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

  useEffect(() => {
    updateLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);

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

    const updatedWatchlist = watchlist.map((item, index) => {
      if (index === checkedIndex) {
        item[isDone] = doneStatus;
      }
      return item;
    });

    setWatchlist(updatedWatchlist);
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
            onRemoveFromWatchlist={removeFromWatchlist}
            onCheckItem={checkItem}
          />
        </Route>

        <Route path="/library">
          <Library />
        </Route>

        <Route path="/friends">
          <Friends />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
