var crypto = require("crypto");
var nodeBase64 = require('nodejs-base64-converter');

exports.token = function () {
    let hash = crypto.createHash('sha512');
    let dat = Math.floor(new Date().getTime()) + Math.floor(Math.random() * 1000) ;
    let tm = String(dat);
    let data = hash.update(tm, 'utf-8');
    let gen_hash = data.digest('hex');
    return gen_hash;
};

exports.jwtKey = function () {
    let hash = crypto.createHash('sha512');
    let dat = Math.floor(new Date().getTime()) + Math.floor(Math.random() * 1000);
    let tm = String(dat);
    let data = hash.update(tm, 'utf-8');
    let gen_hash = data.digest('hex');
    return nodeBase64.encode(gen_hash);
};


