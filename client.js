const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
    });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write("Name: JIL");
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
