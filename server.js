var argv = require('minimist')(process.argv.slice(2));
var express = require('express');
var app = express();
app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});
let root = (typeof argv["rootdir"] != "undefined")?argv["rootdir"] : ".";
app.use(express.static( root ));
app.listen(8080, () => console.log(`listening on port 8080 rootdir ${root}`));