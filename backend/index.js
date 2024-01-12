var CryptoJS = require("crypto-js");

var KEY = '123321';
var PLAINTEXT = 'Esta é uma mensagem para encripta';

var ciphertext = CryptoJS.AES.encrypt(PLAINTEXT, KEY).toString();
var bytes = CryptoJS.AES.decrypt(ciphertext, KEY);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log('CIPHERTEXT: ', ciphertext)
console.log('ORIGINALTEXT: ', originalText)