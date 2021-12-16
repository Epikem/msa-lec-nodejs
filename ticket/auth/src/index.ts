import express from 'express';
import { CurrentUserRouter } from './routes/current-user';

const app = express();

app.use(express.json());

app.use(CurrentUserRouter);

app.listen(3000, () => {
    console.log('auth service listening on 3000');
});
