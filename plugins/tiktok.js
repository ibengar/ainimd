let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = await fetch(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=BetaBotz`)
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendButtonVid(m.chat, res.video, `*Judul:* ${res.title}\n${res.author ? `*Pembuat Video:* ${res.author}` : '\n' }`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', 'menu', usedPrefix + 'menu', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

handler.limit = 1

module.exports = handler
