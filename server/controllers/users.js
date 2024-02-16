var models = require('../models');

module.exports = {

  get: function (req, res) {
    User.findAll()
      .complete(function(err, results) {
        res.json(results);
      });

    // models.users.getAll(function(err, results) {
    //   if (err) {
    //     console.error('Unable to retrieve users from the database: ', err);
    //     res.sendStatus(500);
    //   } else {
    //     res.json(results);
    //   }
    // });
  },
  post: function (req, res) {
    User.create({username: req.body[username]})
      .complete(function(err, user) {
        res.sendStatus(201);
      });


    // var params = [req.body.username];
    // models.users.create(params, function(err, results) {
    //   if (err) {
    //     console.error('Unable to post users to the database: ', err);
    //     res.sendStatus(500);
    //   } else {
    //     res.sendStatus(201);
    //   }
    // });
  }
};