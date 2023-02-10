const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "Done", // Will use table name `category` as default behaviour.
    tableName: "done", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "text",
        },
        time:{
            type:"int"
        },
        date:{
            type:"text"
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