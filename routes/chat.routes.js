const {Router} = require('express');
const NewChat = require('../models/Chat');
const User = require('../models/User');
const config = require('config');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/new',
    async (req, res) => {
        try {
            const {title, userId} = req.body;

            const existentChat = await NewChat.findOne({title});
            const admin = await User.find({_id: userId});
            const adminName = await admin[0].name;

            const newChat = new NewChat({adminName, title, users: [], messages: []});

            if (existentChat) {
                return res.status(400).json({message: 'This chat already exists!'})
            }

            await newChat.save();
            return res.status(201).json({message: 'Chat was create successful.'})

        } catch (e) {
            res.status(500).json({message: 'Something wrong with server, try again pleas.'})
        }
    }
);

router.get('/',
    async (req, res) => {
        try {
            const chats = await NewChat.find();
             await res.json(chats);

        } catch (e) {
            res.status(500).json({message: 'Something wrong with server, try again pleas.'})
        }
    }
);

module.exports = router;