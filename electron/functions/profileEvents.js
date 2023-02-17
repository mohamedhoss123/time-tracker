const { ipcMain } = require("electron");
const { getProfile,createProfile } = require("../services/profile.service");



ipcMain.on("getUserName",async () => {
    const profile = await getProfile()
    console.log(profile);
    return profile
})


ipcMain.on("createNewProfile",async (event,data) => {
    const profile = await createProfile(data)
    console.log(profile);
    // await createProfile({name:data})

})