var express = require('express');
//utilize essa biblioteca

var server = express();

server.get('/', (request, response) => {
    response.send('Hello World!');
})

server.listen(3000);
//escute a porta 3000