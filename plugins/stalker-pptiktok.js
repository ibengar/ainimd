let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=cd7227d604d7acca5d19b4cc
  conn.sendFile(m.chat, res, 'mstrb.jpg', `selebeww`, m, false)
}
handler.help = ['pptiktok'].map(v => v + ' ')
handler.tags = ['downloader']

handler.command = /^(pptiktok)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

