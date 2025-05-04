








const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'SPARK-X-2025;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZOMWFGV3lNcDJnQnBLTWJmeEdreXdFY3ZJZ3VVdzlHWnRSV2k0dndrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamtwS2lZMjh0TVo5U0JQcFZFYzJaMC93MlNXSkRUekc2OU9EOVpLQStnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSmJjQ0FtbnRNRjlIdVJtdms4MmkzUk5welh0VXBGci9LTlNpa01ObldnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOHUxMmllVnpQZ21WN3gxTXJHQlB1VFJJSjlWUGN1MmdrdDR5YnZTS2pRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIYktXeTQ3ZEZzeGYzcG1CdTBJeUZYTFBOd0NGZThyVmw4UGVQZ090VjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNSTGUvd0pxMXhEZnh4NXB4RzExTDRGdUhIdEZNam5IQW1Jd2N4Q1dTZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU84dnJqNHUxUkV2RkV5VXZZek5HTVQxTUFnU2dYOFhTWDZjbXhLWkNFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzRFby9aRGErWXpqWGFrTEFDcGFKajBHMVFjcmMvaEtjUmlIRGZtNllCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjRDF6aXllS21kSVpkSnVkZ2FzYmNqbSt1dExXVGRuUVpJV2JMbUlCU3UxQzZNRXRlU01oMW5LSDVEcGwrVnd6RFJHb0pXeUNCc2pXNG9tWi9ycURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6InFnc0k1K05KQ0QyTEdpRkJtS0ZNVlRGYU1UUVhFd0xnWXJQYklmMm1xWUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MjAyMDY2MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkNDQkU2QzA1REJDRjI2MDk1MUM3OUVGMEU4MDkzNjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjMxODM5M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MjAyMDY2MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjE4NURDRTM0MTY2QzI5RTg4NDZBOTJGQzMxNUJCM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjMxODM5M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2MjAyMDY2MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDVEQTY5QkU1NEJGMzE5Njk2RDE3ODEzRDMzRTI3MzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjMxODQwNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaUlCcHM4ejBROUc3VTh3WlZRcGJZZyIsInBob25lSWQiOiI4YWJiM2UwZi0zN2M5LTRmYmUtYjk4OC1hZDI0OThmZjUwYzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTdydmg3REpRbFNOK0l1Ty8wVjZOR2hNTDRRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jcjcxMjhYRE5ja2lMQlBpLytCMXVWbGFTND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUMVdLWVg3NCIsIm1lIjp7ImlkIjoiMjc2MjAyMDY2MTE6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZC38J2QuOKElfCdkLXwnZmK8J2RjOKYhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0x0cmMwRkVLam8yc0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYytsNkZwMlJPSFRqcEd3eXMrd0JFWHpyYjh1MUJNdFA3OXcyUHF1WjB4VT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQm0vV0RyT0hzZHZZVTY5RFI2MkpQd3JhTzFXWjNkMElhaXVlbnBuZ1dRYTVBcEgzVzAzY2ZoQVlhUzNPcFFsL25NWjZZYkpkWFoxd25nS0xnM3Q3RFE9PSIsImRldmljZVNpZ25hdHVyZSI6Im95NUVpMlI4eVBBWm0wMDVQM2ovSThhU1pRditHS3pGVjZ4NDBaU24xYU84alJVempFUVgzY3gwZHhCaWJGR3VhT2FQcGZ6ZkFkSTRGN0xKYUFSUkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MjAyMDY2MTE6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYUHBlaGFka1RoMDQ2UnNNclBzQVJGODYyL0x0UVRMVCsvY05qNnJtZE1WIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2MzE4MzkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNleCJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐷𝐸ℕ𝐵𝙊𝑌☆",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "𝐷𝐸ℕ𝐵𝙊𝑌☆",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'SPARK-X-2025',
    URL : process.env.BOT_MENU_LINKS || '=https://files.catbox.moe/ugqf62.js',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.CHATBOT1 || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  MENUTYPE : process.env.MENUTYPE || '',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_SAVE_CONTACTS_NAME: "SPARK-X", // Default name prefix for new contacts
                  AUTO_REPLY_MESSAGE: "", 
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
