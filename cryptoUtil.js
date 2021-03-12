
const CryptoJS = require("crypto-js");

var CryptoJS_RC4_encrypt = function (word, keyStr) {
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.RC4.encrypt(srcs, key, {
        iv: keyStr,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

var CryptoJS_RC4_decrypt = function (word, keyStr) {
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var decrypted = CryptoJS.RC4.decrypt(word, key, {
        iv: keyStr,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
}

module.exports = {
    CryptoJS_RC4_encrypt,
    CryptoJS_RC4_decrypt
}