import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import WatchlistForm from './components/WatchlistForm';

export default function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main>
            <h2>Home</h2>
            <p>{serverMessage}</p>
          </Main>
        </Route>

        <Route path="/watchlist">
          <Main>
            <h2>Meine Merkliste</h2>
            <p>{serverMessage}</p>
            <WatchlistForm />
          </Main>
        </Route>

        <Route path="/library">
          <Main>
            <h2>Meine Sammlung</h2>
            <p>{serverMessage}</p>
          </Main>
        </Route>

        <Route path="/friends">
          <Main>
            <h2>Freund*innen</h2>
            <p>{serverMessage}</p>
          </Main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

const Main = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
