let handler = async (m) => {
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jangan Sagne Bang', m)
}
handler.help = ['bokep']
handler.tags = ['nsfw']
handler.premium = false
handler.command = /^(bokep)$/i
handler.limit = 3
handler.premium = true
handler.register = true
module.exports = handler
