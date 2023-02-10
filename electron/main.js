const { app, BrowserWindow , ipcMain} = require('electron');
const path = require("path")
function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        },
        title: 'My App',
    });

    win.setTitle('My App');
    // win.webContents.openDevTools();
    // win.loadFile(path.join(__dirname,"../","dist","'index.html'"));
    win.loadURL('http://localhost:5173/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});



ipcMain.on("ping",() => {
    console.log("ping!");
})