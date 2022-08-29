let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
     conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antiemotebatu onin', 'off', '.antiemotebatu ofin',m)
	} else if(args[0] == 'onin') {
		let cek = global.DATABASE._data.chats[m.chat].noemotebatu
	if(cek) return conn.reply(m.chat, `*Anti-Emote Batu telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].noemotebatu = true
		conn.reply(m.chat, `*Anti-Emote Batu berhasil diaktifkan.*`, m)
	} else if(args[0] == 'ofin') {
		let cek = global.DATABASE._data.chats[m.chat].noemotebatu
	if(!cek) return conn.reply(m.chat, `*Anti-Emote Batu telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].noemotebatu = false
		conn.reply(m.chat, `*Anti-Emote Batu berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antiemotebatu onin', 'off', '.antiemotebatu ofin',m)
	} 
}
handler.help = ['antiemotebatu']
handler.tags = ['group']
handler.command = /^(antiemotebatu)$/i
handler.owner = false
handler.admin = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler