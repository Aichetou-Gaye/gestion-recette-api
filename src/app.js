import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
config();

const app = express();
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.NODE_DOCKER_PORT || 3003;
app.listen(PORT, () => {
  console.log(`Successfully connected on ${PORT} `);
});
