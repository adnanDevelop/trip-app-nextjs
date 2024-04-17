const formModel = require("../models/form_model");

const home = (req, res) => {
  console.log("home page");
  res.json({ message: "Server is running" });
};

const submitForm = async (req, res) => {
  try {
    const submitData = await new formModel(req.body);
    submitData.save();
    res.json({ message: "Form successfully submit" });
    console.log(req.body);
  } catch (error) {
    console.log("Error while submitting form data", error);
  }
};

module.exports = { home, submitForm };
