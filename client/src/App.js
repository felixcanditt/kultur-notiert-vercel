import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [serverMessage, setServerMessage] = useState('');
  const [watchlistItems, setWatchlistItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  function addWatchlistItem(newWatchListItem) {
    setWatchlistItems([newWatchListItem, ...watchlistItems]);
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home serverMessage={serverMessage} />
        </Route>

        <Route path="/watchlist">
          <Watchlist
            onAddWatchlistItem={addWatchlistItem}
            watchlistItems={watchlistItems}
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
