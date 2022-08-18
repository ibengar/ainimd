// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://betabotz-api.herokuapp.com/api/nsfw/neko2?apikey=BetaBotz')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
handler.help = ['nekopoi2']
handler.tags = ['nsfw']
handler.command = /^nekopoi2$/i
handler.limit = true

module.exports = handler
