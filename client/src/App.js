import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Main>
        <h2>Home</h2>
        <p>{serverMessage}</p>
      </Main>
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
