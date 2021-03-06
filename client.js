const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JIL");
    // conn.write("Move: up");
    // setTimeout(() => {conn.write("Move: up")}, 50);
    // setTimeout(() => {conn.write("Move: up")}, 100);
    // setTimeout(() => {conn.write("Move: up")}, 150);
    // setTimeout(() => {conn.write("Move: up")}, 200);
    // setTimeout(() => {conn.write("Move: up")}, 250);
    // conn.write("Move: left");
    // conn.write("Move: down");
    // conn.write("Move: right");
  });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);

  
  });

  return conn;
}

module.exports = {
  connect,
};
