const CONFIG = require('./config.json');

module.exports = {
  getDbConnectionString: () => {
    return `mongodb+srv://${CONFIG.dbUser}:${CONFIG.dbPassword}@cluster0.q9eci.mongodb.net/${CONFIG.dbName}?retryWrites=true&w=majority`;
  }
}