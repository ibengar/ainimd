let handler = async(m,{text, conn}) => {
let supa = 'https://hanzz-web.herokuapp.com/api/randomimage/loli'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['lolirandom']
handler.tags = ['anime']
handler.command = /^(lolirandom)$/i
handler.limit = true
module.exports = handler
