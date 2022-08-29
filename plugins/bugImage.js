const { MessageType } = require('@adiwajshing/baileys')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
let handler  = async (m, { conn, args}) => {
let cdcd = args.join` `
    let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
    if (/image/.test((m.quoted ? m.quoted : m.msg).mimetype || '')) {
      let img = await conn.downloadAndSaveMediaMessage(q)
 conn.sendMessage(m.chat, `${cdcd}`, MessageType.text, {
                   sendEphemeral: true, 
                    thumbnail: await imageToBase64(img)
                    })
    setTimeout(() => { conn.fakeReply(m.chat, `coba reply teks di atas`,'0@s.whatsapp.net', 'awokawok')}, 5000)
    
    }}
handler.help = ['bugimage <reply img>']
handler.tags = ['maker']
handler.command = /^bugimage$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

