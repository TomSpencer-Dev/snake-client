const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
});

conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log("Server says: ", data);
});
conn.on("close", () => {
  conn.log("you ded cuz you idled");
});

return conn;

};

console.log("Connecting ...");
connect();