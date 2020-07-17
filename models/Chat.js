const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    admin: {type: String},
    title: {type: String, required: true},
    users: {type: Array, required: true},
    messages: {type: Array, required: true},
    lastMessage: {type: String},
    newCountMessage: {type: Number},
    unreadMessage: {type: Boolean},
    date: {type: Date, default: Date.now},
    somebodyOnline: {type: Boolean}
});

module.exports = model('Chat', schema);