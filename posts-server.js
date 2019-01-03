const posts = require('./data/posts.json');
var ws = require("nodejs-websocket");
const port = 8000;

var server = ws.createServer(function (conn) {
  console.log("New connection received ");
  sendPostAndWaitBeforeSendingNext(conn);
  conn.on("close", function (code, reason) {
    console.log("Connection closed")
  });
  conn.on("error", function(){
    console.log("Error - Connection lost")
  });
});

server.listen(port, (err) => {
  console.log(`server listening on ${port}`)
});

function sendPostAndWaitBeforeSendingNext(conn) {
  setTimeout(() => {
    conn.sendText(JSON.stringify(getRandomPost()));
    console.log("Sent a new post");
    sendPostAndWaitBeforeSendingNext(conn);
  }, getRandomWait());
}

function getRandomPost() {
  return posts[Math.floor(Math.random() * Math.floor(500))];
}

function getRandomWait() {
  return Math.floor(Math.random() * 6000);
}

