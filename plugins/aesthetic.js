let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.lolhuman.xyz/api/random/estetic?apikey=cd7227d604d7acca5d19b4cc'), 'Nih', wm, 'NEXT', '.aesthetic', m)
}

handler.help = ['aesthetic']
handler.tags = ['maker']
handler.command = /^(aesthetic)$/i
handler.limit = 1

module.exports = handler
