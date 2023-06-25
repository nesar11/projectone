const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Express Server', () => {
  let server;

  before((done) => {
    server = app.listen(7000, () => {
      console.log('Test server started on port 7000');
      done();
    });
  });

  after((done) => {
    server.close(() => {
      console.log('Test server stopped');
      done();
    });
  });

  describe('GET /', () => {
    it('should return "Hello, World!"', (done) => {
      chai
        .request('http://localhost:7000')
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Hello, World!');
          done();
        });
    });
  });

  describe('GET /users', () => {
    it('should return an array of users', (done) => {
      chai
        .request('http://localhost:7000')
        .get('/users')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  describe('GET /books', () => {
    it('should return an array of books', (done) => {
      chai
        .request('http://localhost:7000')
        .get('/books')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
