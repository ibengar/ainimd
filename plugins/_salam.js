let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.text.toLowerCase() == 'p') {
    m.reply('Lebih Baik Salam Bro dari pda pa pe pa pe') 
}
  return true
}

module.exports = handler
