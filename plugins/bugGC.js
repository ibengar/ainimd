let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
for (let i = 0; i < args[0]; i++) {
conn.toggleDisappearingMessages(m.chat)
}
}

handler.help = ['buggc <jumlah>']
handler.tags = ['owner']
handler.command = /^buggc/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler