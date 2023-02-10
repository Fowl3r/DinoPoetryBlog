migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dp472tks6pnvhw8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7butdjim",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Happy",
        "Sad",
        "Therapy",
        "Expression Dump"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dp472tks6pnvhw8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7butdjim",
    "name": "category",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Happy",
        "Sad",
        "Therapy",
        "Expression Dump"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
