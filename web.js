var express = require('express');
var server = express();

server.configure(function() {
  server.use(express.static(__dirname + '/root'));
});

server.listen(process.env.PORT || 80, function(e){
    if(e) console.error("error :" + e);
});
process.on('uncaughtException', function(e) {
    if('EACCES' === e.code && 'EACCES' === e.errno && 'listen' === e.syscall) console.error('try sodo.');
    console.error(e);
});
