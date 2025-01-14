var db = require('../db');

module.exports = {

  getAll: function (callback) {

    // fetch all messages
    // text, username, roomname, id
    var queryStr = 'select messages.id, messages.text, rooms.roomname, users.username \
                    from messages left outer join users on (messages.userid = users.id) \
                    \ LEFT OUTER JOIN rooms on messages.roomid = rooms.id order by messages.id desc';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {

    // create a message for a user id based on the given username
    var queryStr = 'insert into messages(text, userid, roomname) \
                    value (?, (select id from users where username = ? limit 1), ?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
};