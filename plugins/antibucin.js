let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
     conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antibucin nobucinbang', 'off', '.antibucin bucinbang',m)
	} else if(args[0] == 'nobucinbang') {
		let cek = global.DATABASE._data.chats[m.chat].nobucin
	if(cek) return conn.reply(m.chat, `*Anti-Bucin telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobucin = true
		conn.reply(m.chat, `*Anti-Bucin berhasil diaktifkan.*`, m)
	} else if(args[0] == 'bucinbang') {
		let cek = global.DATABASE._data.chats[m.chat].nobucin
	if(!cek) return conn.reply(m.chat, `*Anti-Bucin telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing) 
		global.DATABASE._data.chats[m.chat].nobucin = false
		conn.reply(m.chat, `*Anti-Bucin Batu berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.send2Button(m.chat, 'Hayoloh', '© A N D Y - B O T Z', 'on', '.antibucin nobucinbang', 'off', '.antibucin bucinbang',m)
	} 
}
handler.help = ['antibucin']
handler.tags = ['group']
handler.command = /^(antibucin)$/i
handler.owner = false
handler.admin = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler