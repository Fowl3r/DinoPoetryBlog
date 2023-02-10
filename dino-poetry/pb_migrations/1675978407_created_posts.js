migrate((db) => {
  const collection = new Collection({
    "id": "dp472tks6pnvhw8",
    "created": "2023-02-09 21:33:27.988Z",
    "updated": "2023-02-09 21:33:27.988Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j49lxeq8",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wd5hnmds",
        "name": "body",
        "type": "editor",
        "required": true,
        "unique": true,
        "options": {}
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dp472tks6pnvhw8");

  return dao.deleteCollection(collection);
})
