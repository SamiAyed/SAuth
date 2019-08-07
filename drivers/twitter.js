const NodeOAuth = require('oauth').OAuth;

class Twitter {
  constructor(config) {
    this.config = config;
    this.client = new NodeOAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      this.config.consumer_key,
      this.config.consumer_secret,
      '1.0',
      null,
      'HMAC-SHA1'
    )
  }

  _getBaseUrl() {
    return 'https://api.twitter.com/1.1';
  }

  _parseUserBody(userProfile) {
    return userProfile;
  }

  async _getUserProfile(accessToken, tokenSecret) {
    return new Promise((resolve, reject) => {
      this.client.get(
        `${this._getBaseUrl()}/account/verify_credentials.json?include_email=true`,
        accessToken,
        tokenSecret,
        (error, response, result) => {
          if (error) {
            return reject(error)
          }

          if (result.error) {
            return reject(result.error)
          }

          resolve(JSON.parse(response))
        })
    })
  }

  async getUserByToken(accessToken, tokenSecret) {
    const userProfile = await this._getUserProfile(accessToken, tokenSecret);
    return this._parseUserBody(userProfile);
  }
}

module.exports = Twitter;