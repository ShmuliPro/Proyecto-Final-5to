import express from 'express';
import cors from 'cors';
import VisasRouter from './src/controllers/visas-controller.js';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/visas', VisasRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});