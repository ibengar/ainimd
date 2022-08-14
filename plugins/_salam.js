let fs = require ('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let { performance } = require('perf_hooks')
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let handler = async function (m, { text, usedPrefix }) {
  let pepe = 'https://i.ibb.co/x1Tt79D/db1f96a26f4a.jpg'
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
Salam Yg Bener Kak
`.trim()
var _0x159381=_0x1c85;function _0x2bc0(){var _0x2cc185=['5ZCyNCs','2320326cXAjvk','962213DnbvqZ','BotolBotZ','6658112zENtvS','556468DXlqBN','168449dJwLCA','9eJlSHO','6882650LxQmqp','chat','reply','status@broadcast','6UliCqJ','sender','10344048EVjhmf','8whyjfr','0@s.whatsapp.net'];_0x2bc0=function(){return _0x2cc185;};return _0x2bc0();}function _0x1c85(_0x402d4e,_0xded898){var _0x2bc073=_0x2bc0();return _0x1c85=function(_0x1c8567,_0x54d15b){_0x1c8567=_0x1c8567-0x98;var _0x39945c=_0x2bc073[_0x1c8567];return _0x39945c;},_0x1c85(_0x402d4e,_0xded898);}(function(_0xbd4baa,_0x448eb6){var _0x4f7c20=_0x1c85,_0x4cd3be=_0xbd4baa();while(!![]){try{var _0x30385a=parseInt(_0x4f7c20(0xa3))/0x1*(-parseInt(_0x4f7c20(0x9b))/0x2)+parseInt(_0x4f7c20(0x9e))/0x3+parseInt(_0x4f7c20(0xa2))/0x4*(-parseInt(_0x4f7c20(0x9d))/0x5)+parseInt(_0x4f7c20(0x98))/0x6*(-parseInt(_0x4f7c20(0x9f))/0x7)+-parseInt(_0x4f7c20(0xa1))/0x8+parseInt(_0x4f7c20(0xa4))/0x9*(parseInt(_0x4f7c20(0xa5))/0xa)+parseInt(_0x4f7c20(0x9a))/0xb;if(_0x30385a===_0x448eb6)break;else _0x4cd3be['push'](_0x4cd3be['shift']());}catch(_0x2f94f0){_0x4cd3be['push'](_0x4cd3be['shift']());}}}(_0x2bc0,0x973af),await conn[_0x159381(0xa7)](m[_0x159381(0xa6)],caption,{'key':{'participant':_0x159381(0x9c),'remoteJid':_0x159381(0xa8)},'message':{'orderMessage':{'itemCount':0x99398e7,'status':0x3e7,'thumbnail':await(await fetch(pepe))['buffer'](),'surface':0x3e7,'message':'Salam\x20😇😇','orderTitle':_0x159381(0xa0),'sellerJid':'0@s.whatsapp.net'}}},{'contextInfo':{'mentionedJid':[m[_0x159381(0x99)]]}}));
}
handler.customPrefix = /^(p)?$/i
handler.command = new RegExp

module.exports = handler