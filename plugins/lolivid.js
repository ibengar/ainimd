let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
     let apinya = global.API('caliph', '/asupan/loli', null, 'apikey');
let buttons = [
  {buttonId: '/lolivid', buttonText: {displayText: 'Get Again'}, type: 1}
]
const buttonsMessage = {
    contentText: `
Asupan Lolinya kaak...
`.trim(),    footerText: 'Rikka-Bot by @caliph71',
    buttons: buttons,
  videoMessage: await conn.toMSG({ url: apinya }, 'videoMessage'),
    headerType: 5
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m})

conn.relayWAMessage(sendMsg)
}
handler.help = ['lolivid', 'asupanloli']
handler.tags = ['wibu']
handler.command = /^(lolivid|asupanloli)$/i
handler.owner = false
handler.mods = false
handler.limit = true 
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler