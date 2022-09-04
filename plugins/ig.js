import instagramGetUrl from 'instagram-url-direct'
let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    let res = await instagramGetUrl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'instagram.mp4', author, m)
  }
}
handler.help = ['instagram <url>']
handler.tags = ['downloader']
handler.command = /^i(nsta)?g(ram)?(dl)?$/i

handler.limit = true

export default handler
