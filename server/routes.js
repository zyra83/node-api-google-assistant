var RSS = require('./controllers/rss.server.controller')

module.exports = function (app) {

  app.get('/api-ggl', RSS.welcome);

  app.post('/api-ggl/getCategory', RSS.getCategory);

};