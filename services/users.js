const fs = require("fs").promises;
const path = require("path");

const pathUsers = path.join(__dirname, "../db/contacts.json");

const GetAllUser = async () => {
  try {
    const result = (await fs.readFile(pathUsers)).toString();

    return JSON.parse(result);
  } catch (error) {
    console.log(error);
  }
};

const GetUserById = async (Id) => {
  try {
    const result = await JSON.parse((await fs.readFile(pathUsers)).toString());

    for (user of result) {
      if (user.id == Id) {
        return user;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  GetAllUser,
  GetUserById,
};
