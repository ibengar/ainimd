let handler = async(m,{text, conn}) => {
let supa = 'https://betabotz-api.herokuapp.com/api/asupan/ukhty?apikey=BetaBotz'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanukhty']
handler.tags = ['premium']
handler.command = /^(asupanukhty)$/i
handler.limit = 3
module.exports = handler
