let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.chat]) throw '*Jangan Spam, Coldown 5 detik!!!!*'
 conn.mining[m.chat] = true 
 setTimeout(() => { 
   delete conn.mining[m.chat]
  }, 5 * 5)
}
handler.help = ['.']
handler.tags = ['xp']
handler.customPrefix = /^./
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
