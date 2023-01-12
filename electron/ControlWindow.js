function ControlWindow(win, tray) {
    function toggle() {
        if(win.isVisible()) {
            win.hide()
          } else{
            show()
          }
    }
    function show() {
        const {x, y} = getPosition()
        win.setPosition(x, y, false)
        win.show()
        win.focus()



    }

    function getPosition() {
        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const x = Math.round(trayBounds.x + (trayBounds.width / 10) - (winBounds.width + 300))
        const y = Math.round(trayBounds.y + trayBounds.height - 800) 

        return{ x, y}
    }

    return{
        toggle
    }
}

module.exports = ControlWindow