let handler = async (m, { isPrems, usedPrefix, command }) => {
    let user = global.DATABASE.data.users[m.sender]
    if (user.warning == 0) throw 'Kamu tidak memiliki warning!'

    let waktu = user.lastIstigfar + 180000
    if (new Date - user.lastIstigfar < 180000) throw `Perasaan pas warning nya 0 gaperna istighfar, kalo mau istighfar lagi, tunggu ${msToTime(waktu - new Date())}`
    user.warning -= 1
    m.reply(`Warning kamu berkurang menjadi *${user.warning} / 10*`)
    user.lastIstigfar = new Date * 1
}
handler.command = /^astagh?fir(ullah)?$/i

handler.limit = true

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}