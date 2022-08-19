let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/cosplay`
  conn.sendFile(m.chat, res, 'cosplay.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cosplay'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(cosplay)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

