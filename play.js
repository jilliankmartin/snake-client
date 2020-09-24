const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn);

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();

//   const handleUserInput = function() {
//     stdin.on('data', (key) => {
//       if (key === '\u0003') {
//         process.exit();
//       }
//     });
//   };
  
//   handleUserInput();

  
//   return stdin;
// }

// setupInput();
// module.exports = { connect };

