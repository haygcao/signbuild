const cryptoUtil = require('./cryptoUtil.js');
const fs = require('fs-extra');
const path = require('path');
const { argv } = require('process');

(async () => {
    const enckey = (process.env.enckey || argv[3] || 'iwillencasmkey') + '';
    let buf = Buffer.from(fs.readFileSync(path.join(__dirname, 'asm.tar.gz.enc'))).toString()
    let enc_string = cryptoUtil.CryptoJS_RC4_decrypt(buf, enckey)
    fs.writeFileSync(path.join(__dirname, 'asm.tar.gz.dec'), Buffer.from(enc_string, 'hex'))
})()