//make mongodb schema and model  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//schema for user
var UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

//make otp schema and timestamp true
var OtpSchema = new Schema({
    otp: { type: String, required: true },
    user_id: { type: ObjectId, required: true },

    //otp is valid for 300 seconds 
    created_at: { type: Date, default: Date.now, expires: 300 },
    updated_at: { type: Date, default: Date.now }
},{timestamp:true});


//export user model
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Otp', OtpSchema);


