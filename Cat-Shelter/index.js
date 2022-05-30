const http = require('http');

const server = http.createServer((req, res) => {
    res.write('hello world')
    res.end();

})

server.listen(5000,()=>console.log('blq bql blq'))