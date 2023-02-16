const {contextBridge, ipcRenderer} = require("electron")
contextBridge.exposeInMainWorld('electronAPI', {
  ping:() => {ipcRenderer.send("ping")},
  createNewProfile:(username) => {ipcRenderer.send("createNewProfile",username)},
  getUserName:() => {ipcRenderer.send("")}
});


