const { BrowserWindow } = require('electron')

function createWindow ()  {
    const win = new BrowserWindow({
      width: 800,
      height: 600,  
      autoHideMenuBar: true,
            

    })
  
    win.loadURL('https://www.youtube.com/')
  

  return win
}

  module.exports = createWindow ()