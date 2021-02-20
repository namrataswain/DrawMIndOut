//modules
const path = require('path');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');

const io = socket(server);
const port =  5000;


app.use(express.static('view')) //this line allows it to use every other file needed to render html file properly

io.sockets.on('connection', (socket) =>{
  console.log(socket.id);
  
  //braodcast to all users except the new user 
  
  socket.on('mousedown', (currentPosition)=>{
   io.emit('mousedown', currentPosition)
  })
  socket.on('mousemove', (currentPosition)=>{
    socket.broadcast.emit('mousemove', currentPosition)
   })
})

server.listen(port, () => {
  console.log(`Server has started at port ${port}`);
});
