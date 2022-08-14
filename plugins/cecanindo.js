let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://betabotz-api.herokuapp.com/api/wallpaper/islami?apikey=BetaBotz'), 'Nih Jgn lupa add fb gw https://facebook.com/ribeng2', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['imageislam']
handler.tags = ['premium']
handler.command = /^(imageislam)$/i
handler.limit = 3
module.exports = handler

