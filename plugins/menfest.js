import pkg from '@adiwajshing/baileys'
import fetch from 'node-fetch'

const { MessageType } = pkg

let handler = async(m, { conn, args, usedPrefix }) => {
	if (!args[0] || !args[1]) throw `Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner`
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
	if (!who) `Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner`
	args[1] = args[1].join(' ')
	if (args[1] > 700) throw `Teks Kepanjangan!`

	var nomor = m.sender
	let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

⬡──⬡─────────⬡──⬡

💌 Pesan : ${args[1]}

⬡──⬡─────────⬡──⬡

Maaf Anda Belum Bisa Membalas ke Pengirim`

let cap = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

	//conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/aa06b2e4067f6a6387b75.jpg')).buffer(), chat1, cap, 'Menu', '.menu', 'Donasi', '.donasi', m)
	conn.sendButton(who, chat1, cap, await(await fetch('https://telegra.ph/file/aa06b2e4067f6a6387b75.jpg')).buffer(), [
		[`Menu`, `${usedPrefix}menu`],
		[`Premium`, `${usedPrefix}prem`]
	], m)
	
	let logs = `BOT AKAN BLOKIR KONTAKMU?
	
≫ Spam
≫ Chat Aneh Aneh
≫ Berantem`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${args[1]}

⬡──⬡─────────⬡──⬡`
	//conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/9ceda8d2274e97bad5bca.jpg')).buffer(), logs, haori1, 'Owner', 'owner', 'Donasi', '.donasi', m)
	conn.sendButton(m.chat, haori1, logs, await (await fetch('https://telegra.ph/file/9ceda8d2274e97bad5bca.jpg')).buffer(), [
		[`Menu`, `${usedPrefix}menu`],
		[`Premium`, `${usedPrefix}prem`]
	], m)
}

handler.help = ['menfess <nomor|pesan>']
handler.tags = ['group']
handler.command = /^(menfess|chat)$/i

export default handler
