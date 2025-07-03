import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import supertest from 'supertest';
import app from '../src/app.js';

let mongo;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});
export const request = supertest(app);

export const registerAndLogin = async () => {
  const user = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'test123'
  };

  await request.post('/api/auth/register').send(user);
  const res = await request.post('/api/auth/login').send({ email: user.email, password: user.password });

  return { token: res.body.token, user };
};


export {app}