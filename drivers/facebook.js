const got = require('got');

class Facebook {
  constructor(config) {
    this.config = config;
    this.fields = this.config.fields;
  }

  _getBaseUrl() {
    return 'https://graph.facebook.com/v3.2';
  }

  _parseUserBody(userProfile) {
    return {
      ...userProfile,
      picture: userProfile.picture ? userProfile.picture.data.url : null,
    };
  }

  async _getUserProfile(accessToken) {
    const profileUrl = `${this._getBaseUrl()}/me?access_token=${accessToken}&fields=${this.fields.join(',')}`;

    const response = await got(profileUrl, {
      headers: {
        'Accept': 'application/json'
      },
      json: true
    });

    return response.body;
  }

  async getUserByToken(accessToken) {
    const userProfile = await this._getUserProfile(accessToken);
    return this._parseUserBody(userProfile);
  }
}

module.exports = Facebook;