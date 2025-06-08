import request from 'supertest';
import app from '../api/app'; // precisamos exportar o app separadamente de index.ts
import jwt from 'jsonwebtoken';

describe('Autenticação via JWT', () => {
  it('deve retornar 401 se nenhum token for enviado', async () => {
    const res = await request(app).get('/users/123');
    expect(res.status).toBe(401);
  });

  it('deve retornar 403 com token inválido', async () => {
    const res = await request(app)
      .get('/users/123')
      .set('Authorization', `Bearer tokenInvalido`);

    expect(res.status).toBe(403);
  });

  it('deve permitir acesso com token válido', async () => {
    const token = jwt.sign({ userId: '123' }, process.env.JWT_SECRET || 'segredo');

    const res = await request(app)
      .get('/users/123')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).not.toBe(401);
    expect([200, 404]).toContain(res.status); // 200 se o user existe, 404 se não
  });
});
