const events = require('events');
const emitter = new events.EventEmitter();
var counter = 0;

setInterval( () => {
 counter++;
 //produce a new event, named 'increased'
 emitter.emit('increased', counter);
}, 5000)

//listen the 'increased' event
emitter.on('increased', (num) => {
 console.log(num);
});