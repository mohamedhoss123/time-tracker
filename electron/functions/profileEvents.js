const { ipcMain } = require("electron");
const { getProfile,createProfile } = require("../services/profile.service");



ipcMain.on("getProfile",async () => {
    const profile = await getProfile()
    console.log(profile);
    return profile
})


ipcMain.on("createNewProfile",async (event,data) => {
    
    console.log(data);
    // await createProfile({name:data})

})