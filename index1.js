// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection handle - start.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
   
   console.log('connection handle - end.');
}

var dataHandler = function handleData() {
    console.log('data handle - start');
    
    setTimeout(function() {
        console.log('data received succesfully.');
    }, 3000);
    
    console.log('data handle - end');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', dataHandler);

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");
