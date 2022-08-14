let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/korea'), 'Nih Jgn lupa add fb gw https://facebook.com/ribeng2', wm, 'NEXT', '.cecankr', m)
}

handler.help = ['cecankr']
handler.tags = ['premium']
handler.command = /^(cecankr)$/i
handler.limit = 3
module.exports = handler

