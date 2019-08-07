const got = require('got');

class Google {
  constructor(config) {
    this.config = config;
  }

  _getBaseUrl() {
    return 'https://www.googleapis.com/oauth2/v3';
  }

  _parseUserBody(userProfile) {
    return {
      ...userProfile,
      first_name: userProfile.given_name,
      last_name: userProfile.family_name,
      id: userProfile.sub ? userProfile.sub : userProfile.id,
    };
  }

  async _getUserProfile(accessToken) {
    const profileUrl = `${this._getBaseUrl()}/userinfo`;

    const response = await got(profileUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      json: true
    })
  
    return response.body
  }

  async getUserByToken(accessToken) {
    const userProfile = await this._getUserProfile(accessToken);
    return this._parseUserBody(userProfile);
  }
}

module.exports = Google;