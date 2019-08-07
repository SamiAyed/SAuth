require('dotenv').config()
const chai = require('chai');
const { expect } = chai;
chai.config.includeStack = true;

const SAuth = require('../index');

const sAuth = new SAuth({})

describe('## Google', () => {
  describe('# GET USER FROM TOKEN', () => {
    it('should return id field', (done) => {
      sAuth.driver('google').getUserByToken(process.env.GOOGLE_ACCESS_TOKEN)
        .then(user => {
          expect(user).to.have.any.keys('id');
          done();
        })
        .catch(err => {
          console.error(err);
          done(err)
        });
    });
  });
})
