import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import watchlistRoutes from './routes/watchlist.routes.js';

const connectionString = 'mongodb://localhost:27017/kultur-notiert';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) =>
  res.json('Das ist meine Testnachricht um zu sehen, ob der Server läuft.')
);

server.use(watchlistRoutes);

server.listen(4000);
