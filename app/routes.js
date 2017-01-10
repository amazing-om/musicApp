var album = require('./models/album');
 
module.exports = {
  configure: function(app) {

    app.get('/albumList', function(req, res) {
		album.list(req, res);
    });

  }
};