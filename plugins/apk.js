let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

	axios.get(`http://hujanapi.xyz/api/apkpure?query=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
Nama App : ${res.data.result.data.title}
Link Download : ${res.data.result.data.link}
Mau Langsung Download? Ketik .apkdl (link nya)`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apkpure (kata kunci)']
handler.tags = ['downloader']
handler.command = /^(apkpure)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
