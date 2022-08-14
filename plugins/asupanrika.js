let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://betabotz-api.herokuapp.com/api/asupan/rikagusriani?apikey=BetaBotz', 'asupan.mp4', 'nih asupannya kak ', m)
}
handler.help = ['asupanrika']
handler.tags = ['premium']

handler.command = /^(asupanrika)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler
