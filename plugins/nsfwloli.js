let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await require('node-fetch')('https://raw.githubusercontent.com/Caliph71/txt/main/nsfwloli.json').then(v => v.json())
   conn.sendFile(m.chat, heum[Math.floor(Math.random() * heum.length)], 'Server Error!', 'Lolinya Kaak', m, false)
}
handler.help = ['nsfwloli']
handler.tags = ['sange']
handler.command = /^nsfwloli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
;handler.disable = false
;handler.disable = true
;