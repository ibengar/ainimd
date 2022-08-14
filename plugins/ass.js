let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/ass?APIKEY=HIRO`
  conn.sendFile(m.chat, res, 'ass.jpg', `yaha sange`, m, false)
}
handler.help = ['hentai2'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(hentai2)$/i
handler.owner = false
handler.premium = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

