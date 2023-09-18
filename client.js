const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection is successfully established.");
    conn.write("Name: SNK");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("close", () => {
    console.log("you ded cuz you idled");
  });

  return conn;

};

module.exports = {
  connect // stores connect function as connect
};