const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const datasource = require("./db/datasource");

function createWindow() {
  const win = new BrowserWindow({
    height: 565,
    width: 1024,
    minWidth: 1024,
    minHeight: 565,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // win.webContents.openDevTools();

//   win.loadFile(path.join(__dirname, "..", "dist", "index.html"));
  win.loadURL('http://localhost:5173/');
}

datasource.initialize().then(() => {
  app.whenReady().then(createWindow);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("ping", () => {
  console.log("ping!");
});
require("./functions/profileEvents")