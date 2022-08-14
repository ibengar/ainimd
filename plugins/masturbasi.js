let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/mstrb?APIKEY=4a8b9aba75823076', '', 'sange kok sama kartun', m)
}
handler.help = ['animesex']
handler.tags = ['premium']
handler.command = /^(animesex)$/i

handler.limit = 10
handler.group = true
handler.nsfw = true

module.exports = handler
