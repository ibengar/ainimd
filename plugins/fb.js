let axios = require('axios');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = (await axios.get(API('xteam', '/dl/fbv2', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendFile(m.chat, url, 'fb.mp4', author, m)

}

handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(fb)?(dl)?)$/i

handler.limit = 1

module.exports = handler
