const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "ᴢʜɴᴢᴋ"
global.ownerName = "ʟᴇᴄɪɪɪ"
global.botNumber = "628XXX"
global.devNumber = ["628XXXX"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "15" // Jangan Diganti
global.domain = "https://example.id" // Ganti Domain Lu
global.pltcc = "YOUR_APIKEY" // Isi Apikey Plta Lu
global.pltaa = "YOUR_APIKEY" // Isi Apikey Pltc Lu
global.nama_host = "XS-LECiii" // Ganti Nama Host

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})