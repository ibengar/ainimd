let { getUserProfileInfo } = require('tiktok-scraper')
let handler = async(m, { conn, text:users, command, usedPrefix }) => {
  text = users.replace(/@/gi, '')
    if (!text) throw `Masukan parameter, Contoh *${usedPrefix + command} caliph91_*`

  m.reply('Sedang di proses kak:D')
 let { user, stats } = await getUserProfileInfo(text)
 let { id, uniqueId, avatarLarger, privateAccount, signature, verified } = user
 let { followerCount, followingCount, heartCount, videoCount } = stats
let hasil = `~> *Username* : ${uniqueId}\n~> *ID* : ${id}\n~> *Heart* : ${heartCount} Hearts\n~> *Followers* : ${followerCount} User(s)\n~> *Following* : ${followingCount} User(s)\n~> *Video* : ${videoCount} ${videoCount == 1 ? 'Video' : 'Videos'}\n~> *Private* : ${privateAccount ? '✅' : '❌'}\n~> *Verified* : ${verified ? '✅' : '❌'}`
   buffer = await require('node-fetch')(avatarLarger).then(v => v.buffer());
conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: hasil })
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(tt|tiktok)stalk$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler