let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/randomimg/cosplay'), 'Nih', wm, 'NEXT', '.cosplay', m)
}

handler.help = ['cosplay']
handler.tags = ['premium']
handler.command = /^(cosplay)$/i
handler.limit = 3

module.exports = handler
