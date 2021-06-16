import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

import { addToLocalStorage, loadFromLocalStorage } from './lib/localStorage';

export default function App() {
  const [watchlist, setWatchlist] = useState(
    loadFromLocalStorage('kulturNotiertWatchlist') ?? []
  );

  useEffect(() => {
    addToLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);

  function addToWatchlist(newItem) {
    setWatchlist([newItem, ...watchlist]);
  }

  function removeFromWatchlist(itemToBeRemoved, indexOfItemToBeRemoved) {
    const updatedWatchlist = watchlist.filter(
      (item, index) => index !== indexOfItemToBeRemoved
    );
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
