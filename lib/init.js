var data = require("./data");
var r = require("rethinkdb");

console.log("Checking for database params .... ");

console.log(data.databaseParams);

r.connect(data.databaseParams, function(err, conn) {
  if (err) throw err;
  data.connection = conn;

  console.log("setting up tables ");
  r.tableCreate("events").run(conn, function(err, result) {
    if (err) {
      if (err.name === "ReqlOpFailedError") {
        //ignoew
        console.log("event already exists ..")
      } else {
        throw err;
      }
    }
  });
});
