var models = require('../models').messages;

module.exports = {
  get: function (req, res) {
    models.getAll((err, messages) => {
      res.end(JSON.stringify(messages));
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);
    models.create(req.body, (err, results) => {
      res.end(results);
    });

  } // a function which handles posting a message to the database
};
