let { getVideoMeta } = require('tiktok-scraper')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, isPrems }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  m.reply('Downloading....')
  let { nowm: nowatermark, video: watermark, audio, preview } = (await require('../lib/musicaldown')(args[0]))
     try {
  let { diggCount, text, playCount, commentCount, shareCount, createTime, authorMeta } = (await getVideoMeta(args[0])).collector[0]
  let { name, nickName } = authorMeta
  m.reply('Uploading....')
  let caption = (`「  𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 」

- Name : ${nickName}
- Username : ${name}
- Likes : ${h2k(diggCount)} 
- Viewers : ${h2k(playCount)} 
- Comment : ${h2k(commentCount)} 
- Share : ${h2k(shareCount)} 
- Upload At : ${moment(createTime * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
- Caption : ${text}
`.trim())
  
 conn.sendMessage(m.chat, await getBuffer(nowatermark), 'videoMessage', { quoted: m, caption, thumbnail: await getBUffer(preview) })
} catch (e) {
    m.reply('Server 1 error, trying server 2...')
    conn.sendMessage(m.chat, await getBuffer(nowatermark), 'videoMessage', { quoted: m, caption: 'Jika Ingin Hasilnya Menjadi Audio, Silahkan Reply Video Ini dengan perintah #tomp3' })
}
 
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok(dl)?)$/i

module.exports = handler


function h2k(number) {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

async function getBuffer(url) {
lets = await require('node-fetch')(url)
bus = await lets.buffer()
return bus
}
