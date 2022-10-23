//Lesson 6 -> Running node js on the server

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
});

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});









//Lesson 7 -> My first full stack web app (just adds html)

const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); //We are writing html text
    const html = fs.readFileSync('./index.html', 'utf8'); //We are reading the file
    res.write(html);
    res.end();
});

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});