const express = require("express");
const controller = require("../controllers/users");

const routerUser = express.Router();

routerUser.get("/", controller.GetUsers);

routerUser.get("/:Id", controller.GetUserById);

routerUser.post("/", controller.CreateNewUser);

routerUser.put("/", (req, res) => {
  res.send("User was updated successfully.");
});

routerUser.delete("/", (req, res) => {
  res.send("User was deleted successfully.");
});

module.exports = routerUser;
