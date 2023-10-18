const service = require("../services/users");

const GetUsers = async (req, res) => {
  console.log(req.query);
  const result = await service.GetAllUser();

  res.status(200).json(result);
};

const GetUserById = async (req, res) => {
  const { Id } = req.params;
  const result = await service.GetUserById(Id);

  res.status(200).json(result);
};

const CreateNewUser = (req, res) => {
  console.log(req.body);
  res.send("User was created successfully.");
};

module.exports = {
  GetUsers,
  GetUserById,
  CreateNewUser,
};
