let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://betabotz-api.herokuapp.com/api/cecan/indonesia?apikey=BetaBotz`
  conn.sendFile(m.chat, res, 'bdsm.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cecanindo'].map(v => v + ' ')
handler.tags = ['premium']

handler.command = /^(cecanindo)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 1

module.exports = handler

