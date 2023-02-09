const express = require("express");
const { UpdateUser } = require("../controllers/UpdateUser");

const careerRewardRouter = express.Router();

careerRewardRouter.post("/postNewUserss", UpdateUser);

module.exports = careerRewardRouter;
