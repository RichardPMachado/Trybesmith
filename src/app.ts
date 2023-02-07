import express from 'express';
import productsRouter from './Routes/products.router';
import usersRouter from './Routes/users.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users'. usersRouter);

app.get('/', (_req, res) => {
  res.status(200).send('Tudo certo!');
});

export default app;
