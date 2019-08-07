require('dotenv').config()
const chai = require('chai');
const { expect } = chai;
chai.config.includeStack = true;

const SAuth = require('../index');

const sAuth = new SAuth({
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET
  }
})

describe('## Twitter', () => {
  describe('# GET USER FROM TOKEN AND SECRET', () => {
    it('should return id field', (done) => {
      sAuth.driver('twitter').getUserByToken(process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET)
        .then(user => {
          expect(user).to.have.any.keys('id');
          done();
        })
        .catch(done);
    });
  });
})
