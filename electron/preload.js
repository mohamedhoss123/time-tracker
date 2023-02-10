const {contextBridge, ipcRenderer} = require("electron")
contextBridge.exposeInMainWorld('electronAPI', {
  ping:() => {ipcRenderer.send("ping")},
  manga:() => {ipcRenderer.send("want-to-create-timer")}
});


