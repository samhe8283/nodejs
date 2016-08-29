var crypto=require('crypto-js');
var secreteMessage='I love you';
var secreteKey='abc123';

var encryptedMessage=crypto.AES.encrypt(secreteMessage,secreteKey);

console.log('here is your password'+ encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secreteKey);
var decrypted = bytes.toString(crypto.enc.Utf8);

console.log(decrypted)


