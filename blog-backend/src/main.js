require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import cors from '@koa/cors';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware.js';

const { PORT, MONGO_URI } = process.env;

const connect = () =>
  mongoose
    .connect(
      MONGO_URI,
      { dbName: 'blog3' },
      { useNewUrlParser: true, useFindAndModify: false },
    )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((e) => console.error(e));
connect();
mongoose.connection.on('error', (e) => {
  console.error('에러 발생', e);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다.');
  connect();
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(jwtMiddleware);
app.use(cors());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4001;
app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
