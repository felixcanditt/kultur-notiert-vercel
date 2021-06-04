import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/', (req, res) =>
  res.json('Das ist meine Testnachricht um zu sehen, ob der Server läuft.')
);

server.listen(4000);