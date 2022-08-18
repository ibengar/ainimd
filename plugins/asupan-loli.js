let handler = async(m,{text, conn}) => {
let supa = 'https://betabotz-api.herokuapp.com/api/asupan/bocil?apikey=BetaBotz'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['asupanbocil']
handler.tags = ['premium']
handler.command = /^(asupanbocil)$/i

module.exports = handler
