let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/boobs')).data
   conn.sendFile(m.chat, json.url, 'boobs.jpg', json.title, m, false)
}
handler.help = ['boobs']
handler.tags = ['nsfw']
handler.command = /^(boobs)$/i
handler.group = false
handler.private = false
handler.premium = true
handler.limit = true

module.exports = handler




