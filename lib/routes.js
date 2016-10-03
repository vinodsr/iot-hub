var events = require("./actions/events");
module.exports = {
  init: function(app) {
    app.get("/events/", function(req, res) {
      events.listEvents(req, res);
    });

    app.post("/events", function(req, res) {
      console.log("event create");
      events.createEvent(req, res);
    });

    app.delete("/events", function(req, res) {
      console.log("envent delete");
      events.deleteAll(req, res);
    });
  }
};
