let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/random', 'asupan.mp4', 'nih asupannya kak jangan lupa add fb ku https:facebook.com/ribeng2', m)
}
handler.help = ['asupan']
handler.tags = ['premium']

handler.command = /^(asupan)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler
