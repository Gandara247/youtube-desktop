const { Tray } = require('electron')
const { resolve } = require('path')
const iconPath = resolve(__dirname, '../', 'assets', 'youtube.png')


function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('YouTube Desktop by GANDARA')

    return tray

}

module.exports = createTray()