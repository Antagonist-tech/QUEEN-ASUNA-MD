const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "patner",
    alias: ["thanks", "dev"],
    desc: "Thanks to the tech team and developers",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const user = m.sender.split("@")[0];
        const message = `
╭━━━〔 🤝 ᴛᴇᴄʜɴɪᴄᴀʟ ᴘᴀʀᴛɴᴇʀꜱ 〕━━━┈⊷
┃ 👨‍💻 *ɪɴᴄᴏɴɴᴜ ʙᴏʏ* - Lead Dev
┃ 👨‍💻 *ᴅᴇᴠ ᴀꜱᴋ.* - Co Dev
┃ 👨‍💻 *ᴅʏᴅʏ ᴛᴇᴄʜ* - Support Eng
┣━━━━━━━━━━━━━━━━━━━━━
┃ 🤖 *Bot Name:* QUEEN ASUNA
┃ 🙋‍♂️ *Hello @${user}*
╰━━━〔 💖 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴛʜᴇ ꜱᴜᴘᴘᴏʀᴛ! 〕━━━┈⊷
🛠 *Powered by INCONNU BOY*
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/p1xybt.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363397722863547@newsletter',
                    newsletterName: 'QUEEN ASUNA MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `❌ Error: ${err.message}` }, { quoted: mek });
    }
});
