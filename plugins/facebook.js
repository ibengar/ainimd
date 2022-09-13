import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.facebook.com/groups/2376867322615448/permalink/2487994558169390/`
    let res = await fbDownloader(args[0])
    for (let result of res.download) {
    conn.sendFile(m.chat, result.url, 'facebook.mp4', author, m)
  }
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

handler.limit = true

export default handler
