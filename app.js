const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();
const {Router} = require('express');
const router = Router();


const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.json({ extended: true }));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/chat', require('./routes/chat.routes'));

const PORT = config.get('port') || 5000;

io.on('connection', (socket) => {
    console.log('connection');
    socket.on('userJoined', (data, cb) => {
        router.get('/new', async (req, res) => {
            try {
                console.log('req'+ req);
                console.log('res' +res);
            } catch(e) {

            }
        })


        console.log(data);
    })
})

async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        http.listen(PORT, () => console.log(`Server has been started on port 'http://localhost:${PORT}'...`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1)
    }
}

start();
