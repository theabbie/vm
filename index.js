var app = require("express")();
var axios = require("axios");
var vm = require("vm");

app.get("/*", function(req,res) {
axios("https://thedb.now.sh/app.js").then( function(x) {
vm.runInNewContext(x.data,{axios: axios, req: req, res: res, require: require});
})
})

app.listen(process.env.PORT);
