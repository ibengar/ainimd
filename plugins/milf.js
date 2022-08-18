let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/milf`
  conn.sendFile(m.chat, res, 'milf.jpg', `Nih Kak`, m, false)
}
handler.help = ['milf'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(milf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

