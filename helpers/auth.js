class SAuth {
  constructor(config) {
    this.config = config;
    this.drivers = {};
  }

  _availableDrivers() {
    return ['facebook', 'twitter', 'google'];
  }

  _driversWithRequiredConfig() {
    return ['facebook', 'twitter'];
  }

  driver(driverName) {
    this.driverName = driverName;

    if (!this._availableDrivers().includes(this.driverName)) {
      throw new Error(`Driver ${this.driverName} not available`);
    }

    if (
      this._driversWithRequiredConfig().includes(this.driverName)
      && !this.config[this.driverName]
    ) {
      throw new Error(`Config not available for driver ${this.driverName}`);
    }

    if (!this.drivers[this.driverName]) {
      const Driver = require(`../drivers/${driverName}`);
      const driver = new Driver(this.config[this.driverName] || {});
      this.drivers[driverName] = driver;
    }

    return this.drivers[driverName];
  }
}

module.exports = SAuth;