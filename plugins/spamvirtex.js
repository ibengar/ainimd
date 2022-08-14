var {WAMessageProto} = require('@adiwajshing/baileys')
levelling = require('../lib/levelling')
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				} 
let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://i.ibb.co/Q9Wj9vh/IMG-20210817-WA0001.jpg'
}
 let buttons = [
  {buttonId: '.spam5vx', buttonText: {displayText: '⋮☰ SPAM 5X'}, type: 1},
  {buttonId: '.spam10vx', buttonText: {displayText: '⋮☰ SPAM 10X'}, type: 1},
   {buttonId: '.spam15vx', buttonText: {displayText: '⋮☰ SPAM 15X'}, type: 1}
]
const buttonsMessage = {
    contentText: `Halo ${conn.getName(m.sender)}
Silahkan Pilih Salah Satu Dari Diantaranya
`.trim(),    footerText: 'SPAM VIRTEX' ,
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage'),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  remoteJid: 'status@broadcast',
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(DATABASE.data.users).length, 
thumbnail: await (await require('node-fetch')(imeg)).buffer(),
    message: `${ucapanWaktu} Kak`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
   }
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(spamvirtex)$/i

module.exports = handler

function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}