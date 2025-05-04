const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

const Usermodel= mongoose.model('User', UserSchema);
module.exports= Usermodel