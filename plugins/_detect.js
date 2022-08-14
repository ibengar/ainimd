let handler = m => m

handler.all = async function (m) {
if (m.isGroup && m.messageStubType == 'GROUP_CHANGE_SUBJECT') {
   m.reply(`Terdeteksi @${m.sender.split('@')[0]} Telah Mengubah Subjek Grup`)
  }
  return true
}

module.exports = handler