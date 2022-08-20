//import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
//import { savefrom } from '@bochilteam/scraper'
//import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    // let { result } = await facebookdl(args[0])
    //if (!args[1]) return conn.sendButton(m.chat, `*${htki} ғᴀᴄᴇʙᴏᴏᴋ ${htka}*`, null, null, [['sᴅ', `.fb ${args[0]} sd`],['ʜᴅ', `.fb ${args[0]} hd`]],m)
   let res = await fetch(`https://api.xteam.xyz/dl/fbv2?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    let { result } = await res.json()
    
    let json = await res.json()
    if (!json.status) throw json
    await m.reply('Sedang di proses..')
    await conn.sendFile(m.chat, json.data[1].url, json.data[1].url, wm, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook|)(dl|download)?(er)?(2)?)$/i
handler.limit = true
handler.group = true

module.exports = handler
