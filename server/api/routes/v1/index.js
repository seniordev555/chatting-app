const express = require('express');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const channelRoutes = require('./channel.route');
const messageRoutes = require('./message.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
