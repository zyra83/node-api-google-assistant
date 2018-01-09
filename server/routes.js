var User = require('./controllers/user.server.controller')

module.exports = function (app) {

  app.get('/api-ggl', User.welcome);

  app.post('/api-ggl/getCategory', User.getCategory);

};