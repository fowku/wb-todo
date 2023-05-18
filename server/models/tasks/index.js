const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join('server', 'models', 'tasks', 'data.json');
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

database.defaults([]).write();

module.exports.tasksModel = database;
