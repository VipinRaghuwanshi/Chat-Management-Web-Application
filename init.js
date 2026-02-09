const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me JS callbacks",
        created_at: new Date()
    },
    {
        from: "aarav",
        to: "manish",
        msg: "bro send me the mongoDB notes",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "rahul",
        msg: "can you help me with my project?",
        created_at: new Date()
    },
    {
        from: "tanya",
        to: "amit",
        msg: "meeting at 6 PM, don't be late",
        created_at: new Date()
    }
];


Chat.insertMany(allChats);