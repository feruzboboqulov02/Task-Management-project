import mongoose from 'mongoose';
import request from 'supertest';
import dotenv from 'dotenv';
import app from '../src/app.js';
import e from 'express';

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Auth Routes', () => {
  it('registers a user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
          username: 'testuser',
            password: 'testpassword',
            email: 'test@example.com'
      });

    console.log(res.body); 

    expect(res.status).toBe(201);
    expect(res.body.token).toBeDefined();
  });
});
