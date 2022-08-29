let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antihentai andy', 'off', '.antihentai ndy',m)
	} else if(args[0] == 'andy') {
		let cek = global.DATABASE._data.chats[m.chat].nohentai
	if(cek) return conn.reply(m.chat, `*Anti-Hentai telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohentai = true
		conn.reply(m.chat, `*Anti-Hentai berhasil diaktifkan.*`, m)
	} else if(args[0] == 'ndy') {
		let cek = global.DATABASE._data.chats[m.chat].nohentai
	if(!cek) return conn.reply(m.chat, `*Anti-Hentai telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nohentai = false
		conn.reply(m.chat, `*Anti-Hentai berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antihentai andy', 'off', '.antihentai ndy',m)
	} 
}
handler.help = ['antihentai']
handler.tags = ['group']
handler.command = /^(antihentai)$/i
handler.group = true
handler.owner = false
handler.admin = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler