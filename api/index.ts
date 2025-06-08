import app from './app';
import { connectDB } from '../src/config/db';

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
