// 8. Event Emitter //
import event from 'events';
const e = new event.EventEmitter();
e.on('like', () => {
    console.log('like this');
})
e.on('hello', () => {
    console.log('Greeting To You!');
})
e.emit('like');
e.emit('hello');