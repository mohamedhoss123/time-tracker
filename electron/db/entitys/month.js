const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "Month", // Will use table name `category` as default behaviour.
    tableName: "month", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        date:{
            type:"text"
        },
        total:{
            type:"int"
        }

    },relations: {
        activity: {
            target: "Activity",
            type: "many-to-one",
            joinTable: true,
            cascade: true,
        },
    },
})