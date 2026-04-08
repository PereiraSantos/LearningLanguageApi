import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import wordRoutes from './routes/wordRoutes';
import textLongRoutes from './routes/textLongRoutes'
import textsmallRoutes from './routes/textSmallRoutes'

const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());
app.use('/api/user', userRoutes);
app.use('/api/word', wordRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/textlong', textLongRoutes);
app.use('/api/textsmall', textsmallRoutes);


app.use(errorHandler);

export default app;