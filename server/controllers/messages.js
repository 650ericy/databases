var models = require('../models');


module.exports = {

  get: function (req, res) {

    Message.findAll({ include: [User] })
      .complete(function(err, results) {
        res.json(results);
      });



    // models.messages.getAll(function(err, results) {
    //   if (err) {
    //     console.error('Unable to retrieve messages from the database: ', err);
    //     res.sendStatus(500);
    //   } else {
    //     res.json(results);
    //   }

  },
  post: function (req, res) {

    User.findOrCreate({username: req.body[username]})
      .complete(function(err, user) {
        var params = {
          text: req.body[text],
          userid: user.id,
          roomid: req.body[roomid]
        };
        Message.create(params)
          .complete(function(err, results) {
            res.sendStatus(201);
          });
      });


    // var params = [req.body.message, req.body.username, req.body.roomname];
    // models.messages.create(params, function(err, results) {
    //   if (err) {
    //     console.error('Unable to post messages to the database: ', err);
    //     res.sendStatus(500);
    //   }
    //   res.sendStatus(201);
    // });
  }
};