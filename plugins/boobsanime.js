let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://meme-api.herokuapp.com/gimme/biganimetiddies`
  conn.sendFile(m.chat, res, 'boobs.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['boobsanime'].map(v => v + ' ')
handler.tags = ['nsfw']

handler.command = /^(boobsanime)$/i
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

