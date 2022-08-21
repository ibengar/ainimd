let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ayang = fs.readFileSync('./lib/syg.opus')
conn.sendFile(m.chat, ayang, 'sayank', 'yang', m, true)
//conn.sendMessage(m.chat, ayang, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(sayang)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
