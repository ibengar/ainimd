let { getVideo, getLatest } = require('../lib/nekopoi')
let handler = async (m, { text }) => {
 let latest = await getLatest()
 let { title, links } = await getVideo(latest.link)
 if (links.length == 0) throw 'Video Tidak Ditemukan!'
 teksnya = `*NEKOPOI*\n\nTitle : ${title}\n\n${links.join('\n')}`
// m.reply(teksnya.trim())
 conn.sendFile(m.chat, latest.image, 'nekopoi.jpeg', teksnya.trim(), m)
}
handler.help = ['nekolatest', 'nekopoi']
handler.tags = ['anime','dewasa']
handler.limit = true
handler.command = /^nekolatest|nekopoi$/i

module.exports = handler