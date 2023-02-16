const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "Profile", // Will use table name `category` as default behaviour.
    tableName: "profile", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "text",
        },
        total:{
            type:"int"
        }

    }
})