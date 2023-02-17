const datasource = require("../db/datasource");
const profile = require("../db/entitys/profile");

const profileRepo =  datasource.getRepository(profile)

async function getProfile(){
    const profile = await profileRepo.findOne({where:{id:1}})
    return profile
}


async function createProfile(profile){
    if(await getProfile()){
        return 
    }
    const profileTosave = {
        name:profile,
        total:0
    }
    await profileRepo.save(profileTosave)
}











module.exports = {
    createProfile,
    getProfile
};
