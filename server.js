const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) =>{
    console.log("user connected");

    socket.on("chatMessage", (msg) =>{
        io.emit("chatMessage", msg);
    });

    socket.on("disconnect", () =>{
        console.log("user disconnected");
    });
});

http.listen(5440, () =>{
    console.log("Server running at http://localhost:5440");
});