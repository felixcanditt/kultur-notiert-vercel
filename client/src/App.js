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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempore
          molestiae unde reprehenderit ex eum ratione quae in aliquam labore
          quas modi soluta quia ut sit sed, saepe numquam. Animi? Nostrum
          pariatur commodi, est ullam porro consectetur veritatis adipisci at
          laudantium, soluta, optio itaque repellat iure! Possimus recusandae
          saepe excepturi vero nesciunt! Quos mollitia excepturi repellendus, ex
          doloribus quibusdam accusamus. Nostrum dolores laborum cumque impedit
          quidem recusandae aperiam consequuntur minus fugit sequi animi illo,
          eius possimus, quas aliquid nesciunt voluptas. Molestias hic laborum
          qui et? Fuga suscipit veniam a assumenda! Optio quis velit, facilis
          veritatis facere culpa enim laborum quos! Eveniet eligendi earum
          molestiae architecto consequatur nihil aspernatur in pariatur a,
          facere dolores eaque impedit commodi? Rerum nobis nihil corrupti. Ad,
          vel consectetur corrupti deserunt sunt officiis nostrum obcaecati?
          Expedita facilis facere beatae alias autem iure rem blanditiis vel
          quam necessitatibus distinctio voluptate odio, laboriosam vero
          laborum, dignissimos ratione modi. Dicta natus doloribus, ullam
          commodi saepe, veritatis vel ratione nostrum labore qui est corporis,
          dolor ipsum eligendi nobis omnis expedita inventore id ea modi
          incidunt. Voluptatum accusamus iure earum fugiat. Facilis, fugiat. Ea
          quae nemo non assumenda dicta obcaecati sit at veritatis? Harum
          voluptas, voluptates dignissimos porro voluptatum itaque tempore ab
          numquam vel nemo tenetur nulla. Quos dolorem optio facilis. Dolorem
          quibusdam, doloribus sequi omnis cumque at eius ratione ullam quaerat,
          saepe neque aspernatur esse blanditiis eveniet fuga vel quae facilis
          minima dolor architecto. Sit nostrum non ad nisi debitis. Veritatis
          officia doloremque possimus. Quae quasi impedit ipsam possimus
          reiciendis, unde illo autem tempore consectetur sequi deleniti quidem.
          Praesentium distinctio laudantium veniam molestias voluptatibus
          obcaecati quidem veritatis ad maiores exercitationem. Exercitationem
          necessitatibus a sequi et temporibus omnis saepe non illo amet, harum
          nulla ad alias perspiciatis eius expedita, sed enim adipisci inventore
          sit consequuntur! Explicabo nihil quasi perferendis quae suscipit!
          Modi eligendi, consequatur libero pariatur fugit, voluptas tenetur et,
          ratione non illo sunt nihil amet id odio. Facere id, perspiciatis
          repellendus veniam explicabo, temporibus quia ullam voluptates
          doloribus, culpa at? Nam molestias non assumenda sed laudantium minus
          ea obcaecati vel culpa tempora iure nihil minima rem reiciendis ut
          sapiente, neque incidunt distinctio vero. Dolor, animi. Doloribus,
          illo. Necessitatibus, eveniet temporibus? Recusandae aut, dolor sit
          obcaecati unde, quisquam quia, adipisci sed consectetur officiis
          possimus excepturi officia eligendi totam numquam eaque. Dicta,
          architecto amet. Odit eaque consequatur iure delectus assumenda culpa
          voluptatum. Consectetur explicabo officiis alias molestias vitae,
          molestiae, hic, sapiente rem minima omnis iusto tempore odio sint
          corporis porro. Nostrum magnam quod sunt, tempora aliquid sed dicta
          recusandae iure ea maiores. Commodi, maiores dolor. Architecto dolore
          soluta placeat atque, provident voluptate ipsa nostrum asperiores
          alias ratione magnam eius odit temporibus ut deleniti id quod
          molestiae cupiditate veritatis perferendis. Sit, quis ducimus. Ducimus
          in a explicabo ipsam placeat voluptatem, accusamus aspernatur ad
          asperiores et maiores molestias vel, quis fugit consectetur enim autem
          assumenda nobis hic. Modi consectetur inventore cumque quae
          accusantium aut. Placeat molestiae earum excepturi explicabo, sapiente
          enim fugit dolores hic animi maxime, vero, eveniet sint quaerat quas
          eaque natus provident tempora veritatis iste veniam ipsum pariatur!
          Nemo aperiam rem dolore. Numquam voluptatem amet maiores at
          exercitationem veniam fugiat a magni aspernatur tenetur distinctio
          nulla cumque doloremque ratione harum, et quis facere magnam voluptate
          ex fuga consectetur dignissimos ut! Pariatur, nisi. Quo animi sapiente
          reiciendis hic soluta a amet ipsa ea natus quae placeat eos rerum
          distinctio, alias doloremque recusandae vero, voluptatibus sequi
          cupiditate quas officia voluptatum! Voluptatum nisi laborum dolorem.
          Nulla fuga magnam quisquam necessitatibus, voluptatum eaque suscipit
          ad recusandae quod nostrum incidunt impedit corrupti praesentium.
          Consequatur rem laudantium obcaecati, ullam ex tenetur architecto
          neque vero quas ad, dolor blanditiis.
        </p>
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  padding-top: 100px;
  * {
    margin: 1rem;
  }
  h2 {
    text-align: center;
  }
`;
