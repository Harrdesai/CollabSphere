import { Server } from "socket.io";
import http from "http";
import app from "../app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const httpServer = http.createServer(app);

const io = new Server (httpServer, {
  cors: {
    origin: ["http://localhost:5173"]
  }
})

// we are receing the Aarray of userIds because we have only chatrooms
const getReceiverSocketIds = (userIds) => {
  return userIds.map((userId) => userSocketMap[userId]).filter(Boolean); ;
};

// used to store online users
const userSocketMap = {};

io.on('connection', (socket) => {
  console.log(`user connected via socket id: ${socket.id}`);

  const userId = socket.handshake.query.userId;

  if(userId) {
    userSocketMap[userId] = socket.id;
  }

  // io.emit is used to send event to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log(`user disconnected via socket id: ${socket.id}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  })
});

export { io, httpServer, getReceiverSocketIds };