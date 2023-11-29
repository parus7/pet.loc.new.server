// need path 2 db.json from config.json app
const path2db = "./../database/";
const { saveToDatabase, getData } = require('./utils');

const getAll = (nameDb) => {
  switch (nameDb) {
    case "Empl":
      return getData(path2db + "Empl.json");
      // return path2db + "Empl.json";
      break;
    case "Arch":
      return getData(path2db + "Arch.json");
      // return getData(path2db + "Arch.json");
      break;
    default:
      console.log("Ошибка! Нет такой базы данных");
  }
}

const postAll = (nameDb, DB) => {
  switch (nameDb) {
    case "Empl":
      saveToDatabase((path2db + "Empl.json"), DB);
      return "data save";
      break;
    case "Arch":
      saveToDatabase((path2db + "Arch.json"), DB);
      return "Arch save";
      break;
    default:
      console.log("Ошибка! Нет такой базы данных");
  }
};

module.exports = { getAll, postAll };