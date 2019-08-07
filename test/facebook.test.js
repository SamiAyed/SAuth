require('dotenv').config() 
const chai = require('chai');
const { expect } = chai;
chai.config.includeStack = true;

const SAuth = require('../index');

const sAuth = new SAuth({
  facebook: {
    fields: ['id', 'first_name', 'last_name', 'birthday', 'email', 'picture']
  }
})

describe('## Facebook', () => {
  describe('# GET USER FROM TOKEN', () => {
    it('should return id field', (done) => {
        sAuth.driver('facebook').getUserByToken(process.env.FACEBOOK_TOKEN)
        .then(user => {
          expect(user).to.have.any.keys('id');
          done();
        })
        .catch(done);
    });
  });
})
