const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");

const logger = async (message, logName) => {
    const currentDate = new Date().toUTCString();
    const logMessage = '${currentData}\t${message}'
    try {
        if(fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))  //geri çıkmak için iki nokta
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName)) // o sırada nerede olduğu???



    } catch (error) {

    }

}