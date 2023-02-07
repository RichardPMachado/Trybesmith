import express from 'express';
// import productsRouter from './Routes/products.router';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Tudo certo!');
});

export default app;
