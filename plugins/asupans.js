let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://betabotz-api.herokuapp.com/api/asupan/gheayubi?apikey=BetaBotz', 'asupan.mp4', 'nih asupannya kak jangan lupa add fb ku https:facebook.com/ribeng2', m)
}
handler.help = ['asupangheayubi']
handler.tags = ['premium']

handler.command = /^(asupangheayubi)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler
