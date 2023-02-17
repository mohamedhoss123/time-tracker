const {DataSource} = require("typeorm")


const datasource = new DataSource({
    type:"better-sqlite3",
    database:"./time-tracker.db",
    entities:[require("./entitys/activity"),require("./entitys/done"),require("./entitys/profile")],
    synchronize:true,
})


module.exports = datasource
