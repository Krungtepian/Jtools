const os = require("os");
const path = require('path')

const home = os.homedir();

const dataFolder = path.join(home, 'web-data');

module.exports.write 