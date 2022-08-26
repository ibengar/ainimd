let fetch = require('node-fetch')
let handler = async (m, { command, conn, text }) => {
  let id = (command.match(/[2-6]$/) || [])[2] || ''
  let url = global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'nulis.jpg', '', m, false, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['premium']

handler.command = /^nulis[2-6]?$/i

handler.limit = true

module.exports = handler
