let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://betabotz-api.herokuapp.com/api/nsfw/ass?apikey=BetaBotz`
  conn.sendFile(m.chat, res, 'ass.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ass'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(ass)$/i
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

