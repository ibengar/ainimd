let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanukhty']
handler.tags = ['premium']
handler.command = /^(asupanukhty)$/i
handler.limit = 3
module.exports = handler
