var CryptoJS = require("crypto-js");

var KEY = '123';
var PLAINTEXT = 'Esta é uma mensagem para encripta';
var CIPHERTEXT = 'U2FsdGVkX1+X1zKgP+67b8mwHsaR4/uBuT5xt1EztEg=';

// var ciphertext = CryptoJS.AES.encrypt(PLAINTEXT, KEY).toString();
var originalText = CryptoJS.AES.decrypt(CIPHERTEXT, KEY).toString(CryptoJS.enc.Utf8);

// console.log('CIPHERTEXT: ', ciphertext)
console.log('ORIGINALTEXT: ', originalText)