var r = require("rethinkdb");
var data = require("../data")

module.exports = {
  listEvents: function(req, res) {
    r.table('events').orderBy(r.desc("time")).run(data.connection, function(
      err, cursor) {
      if (err) throw err;
      cursor.toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(JSON.stringify(result, null, 2));
      });
    });

  },
  createEvent: function(req, res) {
    r.table("events").insert(req.body).run(data.connection, function(err,
      result) {
      if (err) throw err;

      res.send(result);
    });
  },
  deleteAll: function(req, res) {
    r.table("events").delete().run(data.connection, function(err,
      result) {
      if (err) throw err;

      res.send(result);
    });
  }
};
