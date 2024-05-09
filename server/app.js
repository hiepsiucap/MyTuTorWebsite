/** @format */

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const CustomAPIError = require("./errors/index").default;
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("express-async-errors");
const Message = require("./Models/message");
const { ErrorHandler } = require("./Middleware/ErrorHandler");
const Authroute = require("./route/Authenticateroute");
const ClassRoute = require("./route/ClassRoute");
const ChatRoute = require("./route/ChatRoute");
const UserRouter = require("./route/UserRoute");
const ListLikeRouter = require("./route/ListLikeroute");
const TutorRouter = require("./route/TutorRoute");
const MessageRouter = require("./route/messageRoute");
const connectDB = require("./DB/connect");
const multer = require("multer");
const NotFound = require("./Middleware/Notfound");
const app = express();
app.use(express.json());
app.use(cookieParser("secret"));
app.set("trust proxy", 1);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const server = http.createServer(app); // Tạo máy chủ HTTP từ ứng dụng Express
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

// Lắng nghe sự kiện từ máy khách qua Socket.IO
io.on("connection", (socket) => {
  socket.on("sendMessage", async (data) => {
    try {
      console.log("hello");
      const response = await Message.create({
        chatId: data.chatId,
        senderId: data.senderId,
        text: data.text,
      });
      // Gửi lại tin nhắn đã lưu vào MongoDB cho tất cả các máy khách khác
      io.emit("messageReceived", response);
    } catch (error) {
      console.log("Not success");
      return;
    }
  });
});
app.use("/api/v1/auth", Authroute);
app.use("/api/v1/class", ClassRoute);
app.use("/api/v1/users/", UserRouter);
app.use("/api/v1/tutors/", TutorRouter);
app.use("/api/v1/chats/", ChatRoute);
app.use("/api/v1/listlike/", ListLikeRouter);
app.use("/api/v1/messages/", MessageRouter);
app.use(NotFound);
app.use(ErrorHandler);
const connectDataBase = async () => {
  try {
    await connectDB(process.env.MONGODB);
    server.listen(process.env.PORT, () => {
      console.log(`Initial tutor find appp at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDataBase();
