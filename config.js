const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUyXKjSBT8FUddpW6xCIEU4YhBbFoRQiue6EMBBZRYDQUIOXTon+lLf8DM9/hLJrDssA/TPR5OFVVFvqzMfO8JJCku0Bw1YPQEshxXkKB2SZoMgREYl56HctAFLiQQjEAq2npZLrh5IhtHdXnQhlFZdlZUNHl0SBle9OEgcXbb1VYt7sG1C7LSjrDzG0B9Gm53tJFIp4ms2OL2sVNdeqg3jZen9dhE87LkqXUlbHGyvgfXFhHiHCe+kgUoRjmM5qgxIM4/Rx/KHllnqjfvb7Be8UGz08chVrjO6TFUDAWZg21ueEylJNPP0c+s7V5h6XjCijxJmD2syViSL5J9WuXGkJKChJrlwkws5OWNfoH9BLlTFyUEk+bTus8XBzvZuExdFFwGJ7GQWhyJtMyUjO2MoezLZm5lj3Biaf7niENWOm7otSbwi96ZrZdoqtkXwqhLk9Vj5AdyP91KHcVficVH4kb+lpXw/+heS3UoeujQkR4zRWGVVaXIZDkX11l+lsTTBXHFgr1Qsh/Wn6NvHgZluZxr3H6mlZXHTncYxsbkMpueQ73kO/XasAcPVrM4fdAdkjL/Hcsq46JTh99Lg/45HpjsRh00en9jpdpls0/3AVlkjEEv4zBUZ1tZrlRR7USqnIvjmanpJcMJ5PRIJ+e1Ya7pDo3LbX7x6/uXF4WombpgRF+7IEc+LkgOCU6Tdo/vdwF0qw1yckRe1AXzTFHIYRf61lilDV6e6IcO6j80EVzb6Vk8riZ7t2G8kDvX96ALsjx1UFEgd4ILkubNEhUF9FEBRn9+64IEncnNt7YaS3eBh/OC7JIyi1Lovpn6dggdJy0TsmkSR2oXKAcj6n0bEYITv2hlLBOYOwGukBRAUoCRB6MCXbvARRV2UIsHVv1kMSz7+63D7FaiN2nMpBysW8pBmtyueB4FHce1vwgcZX/pMzb9xe7zwhfWdSkKwb5nQwp0AX5tmfafXzpIxgtuCMO+cOT0YMjqU75jPD5cGDyzXly4SY9y5IIRyUvUBTZ0wjLbpiFKfoMruOJWqB7mhYDrRihd2p/bkC0HIl18wL1ZCkZP72NKSt0Wj92bc3ajMaAL4pcE4vblwz7P8YMBxQvCiGf/KL7WrY4wy74miIAuSGB7GTz//Ov5x/c7UxEXd/Oprt2Z4n56t5Tvnn98f/75d1v/1ZwW2UUE4qgAIyDN5mu6WGqK3jsXi0LTRN8XJV8E72a+NcUtdaoaHtlGz22rqmNrd7yc2dOuqaz5zn7wCdaqqTjDi8aP6/X9v4CAEZglh0OmViaKo+Gqk/WWu85ybHfkExcHmeGcDqiHTTmPDeg5Uymrhjwl9DqyGs3wmd5AfYM36DhFlrK0BpMAr+kBI0n+fVvtFqqPxfKssXn6KDIrbWjUh9yflOnJFRZnNUCp5Zn1mjP8GYOLfIr1kJCejh/OK74W99VC6xW52ZGrzHUCUut2IEqB1bOD0/rWri/jInod0/ilk55eI+hh9DL1Xt35LxPfm4G6dj9AvI7RXwRubJoP6lA4QYZZCLNYVQXB7dPLnJEijbEWVpA3omRhIZ0VCrhev3VBFkHipXkMRqCIbQi6IIIFEd+beYtjVBAYZ2BE8yxH9zmeGnZB3IhZtiGQvM0AILafwR/A9R+szGK+HggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

