let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/thailand'), 'Nih Jgn lupa add fb gw https://facebook.com/ribeng2', wm, 'NEXT', '.cecanth', m)
}

handler.help = ['cecanth']
handler.tags = ['premium']
handler.command = /^(cecanth)$/i
handler.limit = 1
module.exports = handler

