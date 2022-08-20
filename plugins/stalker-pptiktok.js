let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Masukkan Username Tiktok', m)
let tetete = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=cd7227d604d7acca5d19b4cc`
conn.sendFile(m.chat, tetete, `Hasil Dari ${text}`, wm, 'Thanks', 'thanks', m) 
}
handler.help = ['pptiktok'].map(v => v + ' <username>')
handler.tags = ['downloader', 'stalk', 'internet']
handler.command = /^(pptiktok)$/i

module.exports = handler
