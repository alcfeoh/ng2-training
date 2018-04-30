const posts = require('./data/posts.json');
const http = require('http');
const port = 8000;

const server = http.createServer(
  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.end(JSON.stringify(getRandomPost()))
  }
);

server.listen(port, (err) => {
  console.log(`server listening on ${port}`)
});

function getRandomPost() {
  return posts[Math.floor(Math.random() * Math.floor(500))];
}

