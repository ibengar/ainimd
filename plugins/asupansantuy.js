let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/santuy', 'asupan.mp4', 'nih asupannya kak ', m)
}
handler.help = ['asupansantuy']
handler.tags = ['premium']

handler.command = /^(asupansantuy)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler
