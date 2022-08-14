let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    response = args.join(' ').split('|')
    if (!args[0]) throw 'Masukkan Parameter'
    m.reply('*[ ❗ ] Wait,Proses...*')
    let res = `https://betabotz-api.herokuapp.com/api/textpro/pornhub?&text=${response[0]}&text2=${response[1]}&apikey=BetaBotz`
    conn.sendFile(m.chat, res, 'bpink.jpg', `Nih kak`, m, false)
}
handler.help = ['phlogo'].map(v => v + ' <text|text>')
handler.tags = ['premium']
handler.command = /^(phlogo)$/i
handler.limit = 1
handler.premium = false
module.exports = handler
