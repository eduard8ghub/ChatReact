const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Wrong email...').isEmail(),
        check('password', 'Min length 6 symbol').isLength(6)
    ],
    async (req, res) => {
        // console.log('Body: ', req.body);
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong date on registration...'
                })
            }

            const { email, name, password } = req.body;

            const candidate = await User.findOne({email});

            if(candidate) {
                return res.status(400).json({ message: 'This email already exists!' })
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPassword, name });

            await user.save();

            res.status(201).json({ message: 'Chat was registration successful.' })

        } catch (e) {
            res.status(500).json({ message: 'Something wrong with server, try again pleas.' })
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'Write correct email').normalizeEmail().isEmail(),
        check('password', 'Write password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Wrong date on login...'
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({email});

            if(!user) {
                return res.status(400).json({ message: 'This email does not exist' })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return res.status(400).json({ message: 'Password is wrong' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something wrong with server, try again pleas.' })
        }
    }
);


module.exports = router;