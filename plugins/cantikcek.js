let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.cantik)}”`, m)
}
handler.help = ['cantikcek']
handler.tags = ['game']
handler.command = /^(cantikcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cantik = [
'Cantik Level : 4%',
'Cantik Level : 7%',
'Cantik Level : 12%',
'Cantik Level : 22%',
'Cantik Level : 27%',
'Cantik Level : 35%\n\nYang sabar ya ayang',
'Cantik Level : 41%\n\nSemoga diberkati mendapat jodoh',
'Cantik Level : 48%\n\nDijamin cowok susah deketin lo',
'Cantik Level : 56%\n\nLu Setengah Cantik :v',
'Cantik Level : 64%\n\nCukuplah',
'Cantik Level : 71%',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'Cantik Level : 77%',
'Cantik Level : 83%',
'Cantik Level : 89%',
'Cantik Level : 94%',
'Cantik Level : 100%',
]