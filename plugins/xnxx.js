let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
    let chat = db.data.chats[m.chat]
    /*if (!chat.nsfw || chat.isBanned) throw `Fitur NSFW Tidak Aktif`*/
    if (!text) throw `text nya mana?\n\ncontoh:\n${usedPrefix + command} jepang`
    let res = await fetch(API('ibengrest', '/api/downloader/xnxx', { query: text }, 'apikey'))
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let capt = `
*XNXX Search*

${json.result.map(v => `*${v.title}*\npenonton: ${v.views}\nDurasi: ${v.duration}\nUploader: ${v.uploader}\nLink: ${v.link}\nThumbnail: ${v.thumbnail}`).join`\n\n`}
    `.trim()
    conn.sendFile(m.chat, json.result[0].thumbnail, '', capt, m)
}
handler.help = ['xnxxsearch'].map(v => v + ' <teks>')
handler.tags = ['premium']
handler.command = /^xnxxsearch$/i
handler.register = false
handler.premium = false
module.exports = handler
