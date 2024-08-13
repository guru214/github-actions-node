import request from 'supertest';
import { app, server } from '../sample.js';

describe('API Endpoints', () => {
  after((done) => {
    server.close(done);
  });

  describe('GET /', () => {
    it('should return Hello, World! DevOps CICD', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /text/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (res.text === 'Hello, World! DevOps CICD') {
            return done();
          } else {
            return done(new Error(`Expected 'Hello, World! DevOps CICD' but got '${res.text}'`));
          }
        });
    });
    
  });

  describe('GET /details', () => {
    it('should return a list of details', (done) => {
      request(app)
        .get('/details')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          if (Array.isArray(res.body) && res.body.length === 3) {
            return done();
          } else {
            return done(new Error(`Expected an array of 3 details but got ${res.body.length}`));
          }
        });
    });
  });

  describe('POST /details', () => {
    it('should add a new detail and return it', (done) => {
      const newDetail = { name: 'Detail 4', description: 'This is detail 4' };
      request(app)
        .post('/details')
        .send(newDetail)
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          if (res.body.name === newDetail.name && res.body.description === newDetail.description) {
            return done();
          } else {
            return done(new Error(`Expected the new detail to be returned but got ${JSON.stringify(res.body)}`));
          }
        });
    });

    it('should return 400 if name or description is missing', (done) => {
      const invalidDetail = { name: 'Detail 5' }; // Missing description
      request(app)
        .post('/details')
        .send(invalidDetail)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          if (res.text === 'Name and description are required') {
            return done();
          } else {
            return done(new Error(`Expected 'Name and description are required' but got '${res.text}'`));
          }
        });
    });
  });
});
