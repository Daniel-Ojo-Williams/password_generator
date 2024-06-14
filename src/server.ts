import type { Request, Response } from 'express';
import express from 'express';
import passwordGenerator from './app';

const app = express();
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  try {
    const { strength, length } = <{strength: number, length: number}>req.body;
    if (typeof(strength) !== 'number' || typeof(length) !== 'number') return res.status(400).send('Strength and length should both be numbers')

      const password = passwordGenerator(strength, length);

      res.status(201).send(password);
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
})

const port = 8000;
app.listen(port, () => console.log('Server started'));