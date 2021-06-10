import styled from 'styled-components/macro';

import { useEffect, useState } from 'react';

import Header from './pages/Header';
import Footer from './pages/Footer';

export default function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  return (
    <div className="App">
      <Header />
      <Main>
        <h2>Home</h2>
        <p>{serverMessage}</p>
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  padding-top: 3rem;

  h2 {
    text-align: center;
  }
`;
