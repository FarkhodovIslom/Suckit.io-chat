const express = require('express');
const config = require('./config/config');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Server } = require('socket.io');
const router = require('./routes/index');

const app = express();

app.use(cors({
    origin: config.corsOrigin
}));
app.use(express.json());
app.use(router);


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: config.corsOrigin,
        methods: ["GET", "POST"]
    }
});


app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
}); 