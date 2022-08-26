let fetch = require('node-fetch')
let bpink = []
fetch('https://raw.githubusercontent.com/Laksmana27/DATABASE-3/main/gabut/bohaysma.json')
    .then(res => res.json())
    .then(json => bpink = json.split('\n'))
let handler = async (m, { conn }) => {
    let img = bpink[Math.floor(Math.random() * bpink.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih Blackpinknya  👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.limit = 5
handler.command = /^(bpink|bp|blackpink)$/i

module.exports = handler
