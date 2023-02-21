const Auth = require("../db/authDb");

const registration = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isRegistered = await (await Auth.find()).includes(email);
    if (isRegistered) throw new error();
    else {
      const register = await Auth({ name, email, password }).save();
      console.log(register);
      res.json(register);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const login = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isRegistered = await (await Auth.find()).includes(email);
    if (isRegistered) throw new error();
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registration,
};
