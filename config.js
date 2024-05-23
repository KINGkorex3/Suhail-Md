const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349132681483" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_21_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImF3WmFtcHh6UndQS1pDVUVYK3B5cTNKdFhYT0hkOEdteXF2enljSk81RVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNJdm1uNUNRVHBDM3NuUmdhRzRlTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGVjZDJjOGYtNWU3Ny00NmVhLTlkMzgtMjkzN2M0NWNmMmVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgMTMxLFxuICAgICAgNzQsXG4gICAgICA1NixcbiAgICAgIDMsXG4gICAgICAxMDUsXG4gICAgICAyMTMsXG4gICAgICAxODcsXG4gICAgICAxMzAsXG4gICAgICAxNDMsXG4gICAgICA1MCxcbiAgICAgIDEyLFxuICAgICAgMTQ3LFxuICAgICAgMTU4LFxuICAgICAgMjE4LFxuICAgICAgMjcsXG4gICAgICAxMDksXG4gICAgICAxOTYsXG4gICAgICAxMjcsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMjI4LFxuICAgICAgNTUsXG4gICAgICA5NSxcbiAgICAgIDkwLFxuICAgICAgOTgsXG4gICAgICA0MSxcbiAgICAgIDExNyxcbiAgICAgIDE4NyxcbiAgICAgIDE0MCxcbiAgICAgIDEyMSxcbiAgICAgIDEzNSxcbiAgICAgIDExMixcbiAgICAgIDM3LFxuICAgICAgMTUyLFxuICAgICAgMjIsXG4gICAgICAyMTgsXG4gICAgICA2MCxcbiAgICAgIDUxLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTNZWDZKRENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzI2ODE0ODM6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNTMxMjY5MDc1Mzc1MDozMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4aD8J+Ft/CfhbQg8J+FuvCfhbjwn4W98J+FtlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmejQ0a0JFUGJ3L0xFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1BLWTRaSzgvYVhNUkUrMFgwSDFVeFNQaWRLdG96cWZXd0hKeU45RmZHVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvVyt0R3dqMERTODRvcW5ERHpsbXJNZVFBWXRtbHhWVk03dXg5RnFVTlh1TVFPeDhQQmYzc2VtVFBkOW9qbmlJOUtWT21XTytoSkVxV0V6dFRQdkhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCVWU5cjdxQTRMNGFmV0w5UEZwRkwrUndrV1k1N2o2aFNiMTJMdVF1a25JSGhwdXViZ3lEQk1CZEZjcXZRenN2Q1l4YUhmUnhiZUlhZy90NXZZeU1Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMyNjgxNDgzOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQxOTI1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGYxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYXFWMWJ5NDVTQnhyajh2a016SWllcENVT0VKY2Evb3FLUTVpZWM1Mm40ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODg5NDY2MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTAyNjUwOTI5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
