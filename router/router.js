var appRouter = function(app) {
 app.get("/", function(req, res) {
    res.send("Hello World");
});
 app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password ) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body.password);
    }
    console.log(req);
});
 app.get("/account", function(req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }
    if(!req.query.password) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.password != accountMock.password) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});

}
 
module.exports = appRouter;

