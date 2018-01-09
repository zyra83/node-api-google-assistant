module.exports = {

  /**
   * Welcome Notice
   * @param  req
   * @param  res
   * @return Void
   */
  welcome: function(req, res){
    return res.status(200).json({ message: 'Bienvenue sur l\'API zyra.fr version goggle assistant (bidouilles)'});
  },

  /**
   * Register User with subscription ID
   * @param  req
   * @param  res
   * @return json
   */
  getCategory: function(req, res){
    console.log(req.body);
    return res.status(201).json({ 'speech': "message serveur, speech", 'displayText': 'message serveur, display text' });
   
  }

};