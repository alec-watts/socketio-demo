const socket = io('ws://localhost:8080');

socket.on('message', text => {
    console.log('message');

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = () => {

    console.log("hello")
    const input = document.querySelector('input');
    socket.emit('message', input.value);
    input.value = '';
}