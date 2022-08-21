let handler = function (m) {
	if (!m.quoted) throw false
	let { chat, fromMe } = m.quoted
	if (!fromMe) {
		try {
			conn.sendMessage(chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
		} catch (e) {
			console.log(e)
		}
	} else {
		try {
			conn.sendMessage(chat, { delete: m.quoted.vM.key })
		} catch (e) {
			console.log(e)
		}
	}
}

handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.limit = 5
handler.command = /^(d(el(ete)?)?)$/i

module.exports = handler
