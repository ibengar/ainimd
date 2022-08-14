let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/random'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanrandom']
handler.tags = ['premium']
handler.command = /^(asupanrandom)$/i
handler.limit = 3
module.exports = handler
