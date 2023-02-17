const { ipcMain } = require("electron");
const { getProfile,createProfile } = require("../services/profile.service");



ipcMain.handle("getUserName",async () => {
    const profile = await getProfile()
    console.log("this is profile: ",profile);
    return profile
})


ipcMain.on("createNewProfile",async (event,data) => {
    const profile = await createProfile(data)
    console.log(profile);

})