const {DataSource} = require("typeorm")


const datasource = new DataSource({
    type:"better-sqlite3",
    database:"./time-tracker.db",
    entities:[require("./entitys/activity"),require("./entitys/done")],
    synchronize:true,
    logging:true
})


module.exports = datasource
