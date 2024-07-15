const { ActivityType } = require('discord.js')
const mcpePing = require('mcpe-ping')

const address = 'Sunucu Adresi' // Sunucu Adresi
const port = 19132

setInterval(() => {
    mcpePing(address, port, (error, message) => {
        if (error) {
            console.error('Sunucuya bağlanılamadı:', error)
            client.user.setActivity('Sunucu Çevrimdışı', { type: ActivityType.Watching })
            return
        }

        const activityText = `Sunucuda ${message.currentPlayers} oyuncu oynuyor.`
        client.user.setActivity(activityText, { type: ActivityType.Watching })
        console.log(activityText)
    })
}, 10000)
