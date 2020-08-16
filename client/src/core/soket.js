import io from 'socket.io-client';

const socket = io(window.location.origin.replace('3000', '7000'));

export default socket;