/*let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) throw `Harap masukan judulnya\n\n\nContoh : .xnxxsearch segs brutal`
    let res = await fetch(`https://api.zacros.my.id/nsfw/xnxx-search?query=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let teks = json.result.map(res => res.subject + \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}\n==============\n`).join('\n') 
    m.reply(teks)
    else throw json
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['premium']
handler.command = /^(xnxxsearch)$/i
handler.premium = true
handler.limit = 6

module.exports = handler*/
