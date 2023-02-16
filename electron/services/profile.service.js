const datasource = require("../db/datasource");
const profile = require("../db/entitys/profile");

const profileRepo =  datasource.getRepository(profile)

async function getProfile(){
    const profile = await profileRepo.find()[0]
    return profile
}




async function createProfile(profile){
    if(await getProfile()){
        throw Error("cannot craete new Profile there is already one");
    }
    await profileRepo.save(profile)
}











module.exports = {
    createProfile,
    getProfile
};
