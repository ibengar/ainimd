let handler = async(m, { conn, args, usedPrefix }) => {
	
let chat = `  >//< aku sebel sama kamu tau 
pengen ngewe sampe muncrat di TT Lu Yg Gede Itu kyaa >///<
 
`.trim()
m.reply(chat)
}
handler.help = ['ayg']
handler.tags = ['owner']
handler.command = /^(ayg)$/i
 
module.exports = handler

handler.premium = true
