const { app, BrowserWindow, remote } = require('electron')
const path = require('path')

function createWindow() {

    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
        frame: false,
    })

    mainWindow.webContents.openDevTools();

    mainWindow.loadFile('index.html')
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})