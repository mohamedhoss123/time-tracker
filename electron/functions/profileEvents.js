const { ipcMain } = require("electron");
const { getProfile } = require("../services/profile.service");



ipcMain.on("get-profile",async () => {
    const profile = await getProfile()
    console.log(profile);
    return profile
})
