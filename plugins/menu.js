let fs = require ('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require ('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.DATABASE.data.users[m.sender]
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
     let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
     let oy = `Hi @${who.replace(/@.+/, '')}`
    const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6285795431803-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': `${pickRandom(['17818','6651','9123','1246','2241','613'])}`, 
                 'caption': `*Halo* ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}, *${ucapan()}* *${ucapin()}*, ${pickRandom(['*Wis*','aku sayang kamu','*xixi*','*cans cuk*','*kawaii*','*hemhe*'])}`,
                 'jpegThumbnail': fs.readFileSync(`./src/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'])}.jpg`)
                        }
                       }
	                  }
/* const freply = {
	key: {
  participant: '0@s.whatsapp.net',
  remoteJid: 'status@broadcast'
 },
 message: {
  imageMessage: {
   caption: `*Hamlo, ${ucapan()} ${ucapin()}*`,
   jpegThumbnail: fs.readFileSync(`./src/fitacans.jpg`)
  }
 }
} */
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
  //  let name = m.fromMe ? conn.user : conn.contacts[m.sender]  
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'ㅤM A I N',
      'absen': 'ㅤA B S E N - M E N U',
      'game': 'ㅤG A M E',
      'rpg': 'ㅤR P G',
      'berburu': 'ㅤR P G - V 2',
      'xp': 'ㅤU A N G & L I M I T',
      'sticker': 'ㅤS T I C K E R',
      'kerang': 'ㅤK E R A N G - A J A I B',
      'quotes': 'ㅤQ U O T E S',
      'group': 'ㅤG R O U P',
      'premium': 'ㅤP R E M I U M',
      'anime': 'ㅤW I B U - M E N U',
      'job': 'ㅤJ O B - M E N U',
      'toko': 'ㅤT O K O - M E N U', 
      'dewasa': 'ㅤ1 8 + - M E N U', 
      'primbon': 'ㅤP R I M B O N - M E N U',
      'islam': 'ㅤI S L A M - M E N U',
      'internet': 'ㅤI N T E R N E T',
      'berita': 'ㅤB E R I T A - M E N U',
      'nulis': 'ㅤM A K E R - M E N U',
      'ph': 'ㅤP H O T O O X Y - M E N U',
      'ep': 'ㅤE P H O T O - M E N U',
      'te' : 'ㅤT E X T - P R O - M E N U',
      'serti': 'ㅤS E R T I - M E N U',
      'apk': 'ㅤA P K - M O D',
      'expression': 'ㅤE X P R E S S I O N',
      'logo': 'ㅤL O G O - M E N U',
      'anonymous': 'ㅤA N O N Y M O U S - C H A T',
      'downloader': 'ㅤD O W N L O A D',
      'sound': 'ㅤS O U N D - M E N U',
      'stalk': 'ㅤS T A L K - M E N U',
      'tools': 'ㅤT O O L S',
      'fun': 'ㅤF U N',
      'owner': 'ㅤO W N E R',
      'host': 'ㅤH O S T',
      'advanced': 'ㅤA D V A N C E D',
      'info': 'ㅤI N G F O',
      '': 'ㅤN O - C A T E G O R Y',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
❕ *INFO*  : kini bot menjual nomor OTP canada, ketik *.toko* untuk melihat produk lainnya.

         \`\`\`${oy} 🌹\`\`\`

┌─「 I N F O - B O T Z 」
├ BOT NAME : *ANDY-BOTZ*
├ VERSION : *6.8.1*
├ TOTAL USER : *%totalreg*
├ UPTIME : *%uptime*
├ BATTERY : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Lagi di cas' : '⚡ Engga di cas'}` : 'Unknown'}
├ PREFIX :*「 MULTI BANG 」*
├ SC ORI : 
├ *github.com/Nurutomo/wabot-aq*
├ RECODE : *@${owner[0]}*
└─

┌─「 I N F O - K A M U 」
├ NAMA : *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
├ NOMOR TELEPON : *https://wa.me/${who.split`@`[0]}*
├ REGISTER : *${registered ? 'Yes': 'No'}*
├ ROLE : *${role}*
├ HEALTH : *${healt}*
├ MONEY : *${money}*
├ LIMIT : *${limit}*
├ LEVEL: *${level}*
├ XP : *${exp}*
└─

┌─「 L O C A L - T I M E 」
├ ${wib} *WIB*
├ ${wita} *WITA*
├ ${wit} *WIT*
└─

┌─「 I N F O - D A T E 」
├ HARI : *%week %weton*
├ TANGGAL ; *%date*
├ TGL ISLAM : *%dateIslamic*
└──────────────────────
%readmore`
    let header = conn.menu.header || '❏ ```%category```\n'
    let body   = conn.menu.body   || '├> *%cmd%islimit*'
    let footer = conn.menu.footer || '└─\n'
    let after  = conn.menu.after  || '❏ ㅤ```T E N G S - T O``` \n\n*N U R U T O M O*\n*A N D Y - J S*\n*A N T I - B O T*\n*A R I F F B*\n*W I L D A N - I Z Z U D I N*\n*D R A W L - N A G*\n\n❏ ㅤ```T E N G S - T O - T E A M``` \n\n*K E L U A R G A - B E S A R - A N D Y*\n*A N D Y × A N T I - B O T Z - O F F C*\n*A R G I O - D E V*'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? '(Pake Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
conn.fakeReply(m.chat, `tak loading, sek yh!!!`, '0@s.whatsapp.net','*Hadehhhhhhh*')
await conn.send2ButtonImg(m.chat, text.trim(), `./cewe/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'])}.jpg`, `© A N D Y - B O T Z | Made Whit @${owner[0]}`, 'Donasi', '.ds', 'Script Bot', '.sc', { quoted: fvideo, sendEphemeral: true, contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 135,                 isForwarded: true ,"externalAdReply": {
          "title": `${pickRandom(['palpale','awokwkwkw','awikwok','duk tak duk'])}`,
          "body": `${pickRandom(['follow bang','© andyjavadams','Kok bisa bang','Waduh bang','Pencet lah'])}`,
          "mediaType": "1",
          "thumbnailUrl": `${pickRandom(['https://telegra.ph/file/6e33a92a7917a6da614c8.png','https://telegra.ph/file/4d55bd6548fe15f3929e8.png','https://telegra.ph/file/358bd1243061f415225e2.png','https://telegra.ph/file/8208c148ab682cf7bd12a.png'])}`,
          "mediaUrl": `${pickRandom(['https://instagram.com/_andy.offc','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
     //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
         "sourceUrl": `${pickRandom(['https://instagram.com/_andy.offc','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
           }}})
/* await conn.send2ButtonImg(m.chat, text.trim(), './src/hehe.jpg', '© A N D Y - B O T Z', 'Donasi', '.ds', 'Script Bot', '.sc', 'conversation', { sendEphemeral: true, quoted: fvideo, contextInfo : { mentionedJid: conn.parseMention(text), forwardingScore: 135,
                isForwarded: true ,"externalAdReply": {
          "title": `${pickRandom(['palpale','awokwkwkwkw','awikwok','duk tak duk'])}`,
          "body": `${pickRandom(['follow bang','© andyjavadams','Pencet lah'])}`,
          "mediaType": "1",
          "thumbnailUrl": `${pickRandom(['https://telegra.ph/file/6e33a92a7917a6da614c8.png','https://telegra.ph/file/4d55bd6548fe15f3929e8.png','https://telegra.ph/file/358bd1243061f415225e2.png','https://telegra.ph/file/8208c148ab682cf7bd12a.png'])}`,
          "mediaUrl": `${pickRandom(['https://instagram.com/_andy.offc','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
     //     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
         "sourceUrl": `${pickRandom(['https://instagram.com/_andy.offc','https://instagram.com/andybotz.official_','https://github.com/andyjavadams','https://wa.me/6285795431803?text=Sv+bang'])}`,
           }}}) */
/* await conn.sendMessage(m.chat, text.trim(),'conversation',{quoted: fvideo, contextInfo:{"externalAdReply": {
          "title": "Bwang",
          "body": "YouTube Play Audio",
          "mediaType": 2,
          "thumbnailUrl": "https://telegra.ph/file/e5c6b574aeeaa53c43679.jpg",
          "mediaUrl": "https://youtu.be/iuJDhFRDx9M",
          "thumbnail": ""
}}}) */

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^huh$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dini hari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function ucapin() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "🌃"
    if (time >= 4) {
        res = "🌄"
    }
    if (time > 10) {
        res = "☀️"
    }
    if (time >= 15) {
        res = "🌆"
    }
    if (time >= 18) {
        res = "🌉"
    }
    return res
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
