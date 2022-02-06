import { User } from '../models/user';
import { Otp } from '../models/otp';

//require bcrypt,lodash,axios,otpGenerator
var bcrypt = require('bcrypt');
var _ = require('lodash');
var axios = require('axios');
var otpGenerator = require('otp-generator');

//make async signup module
module.exports.signup = async (req, res) => {
}

//make async verfyOtp module
module.exports.verifyOtp = async (req, res) => {

}
