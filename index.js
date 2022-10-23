//Lesson 1 -> running a nodejs program
console.log('This is my first nodejs program');






//Lesson 2 -> global keyword
global.number = 10;
console.log(global.number);








//Lesson 3 -> process keyword

console.log(process.platform); //shows what platform you are working on
//process keyword is used to access system 







//Lesson 4 -> events

process.on('exit', ()=> {
    console.log('exit');
}); //(event, callback_function)






//Lesson 5 -> emitting events

const { EventEmitter } = require('events'); //making an event by default
const event = new EventEmitter(); //creating an event object

event.on('message', () => {
    console.log('message');
});

event.emit('message');
event.emit('message');
event.emit('message');

