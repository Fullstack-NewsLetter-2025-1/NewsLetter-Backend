import app from '../../api/app';
import { connectDB } from '../config/db';
import router from './AuthRoutes';

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
export default router;
