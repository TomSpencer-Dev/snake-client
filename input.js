let connection;

// "data" callback handler for stdin.

const handleUserInput = function(data) {

  switch (data) {
    case '\u0003':
      process.exit();
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
  }
};

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = {
  setupInput // stores setupInput function as setupInput
};