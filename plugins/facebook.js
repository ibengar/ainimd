import xa from 'xfarr-api'

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} fb_url_video*\n\nExample :\n${usedPrefix + command} https://web.facebook.com/watch/?v=892725951575913`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await xa.downloader.facebook(text)
		try {
			await conn.sendFile(m.chat, anu.sd, 'fbhd.mp4', `_Low Quality :_\n${anu.title}\n⭔ by ${anu.author}`, m)
		} catch {
			await conn.sendFile(m.chat, anu.hd, 'fbhd.mp4', `_High Quality :_\n${anu.title}\n⭔ by ${anu.author}`, m)
		}
	} catch (e) {
		console.log(e)
		m.reply(`Invalid facebook url / group di private.`)
	}
}

handler.menudownload = ['fb <url>']
handler.tagsdownload = ['downloader']
handler.command = /^((fb|facebook)(dl)?)$/i

handler.premium = false
handler.limit = true

export default handler
