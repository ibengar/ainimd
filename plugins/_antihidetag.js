let handler = m => m

handler.all = async function (m) {
metadata = m.isGroup ? await this.groupMetadata(m.chat) : {}
  participant = m.isGroup ? metadata.participants : []
    if (m.isGroup && !m.text.includes('@') && m.mentionedJid.length == participant.length) {
    if (m.key.fromMe) return
    if ('antihidetag' in DATABASE.data.chats[m.chat] && DATABASE.data.chats[m.chat]['antihidetag'] == true && participant.find(v => v.jid == m.sender).isAdmin == false && participant.find(v => v.jid == this.user.jid).isAdmin == true)
{
await this.groupRemove(m.chat, [m.sender])
m.reply('Meresahkan asw')
}
  }
  return true
}

module.exports = handler