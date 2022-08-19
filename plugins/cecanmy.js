let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://betabotz-api.herokuapp.com/api/cecan/malaysia?apikey=BetaBotz'), 'Nih', wm, 'NEXT', '.cecanmy', m)
}

handler.help = ['cecanmy']
handler.tags = ['premium']
handler.command = /^(cecanmy)$/i
handler.limit = 3

module.exports = handler
