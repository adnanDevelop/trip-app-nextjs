const formModel = require("../models/form_model");
const destinationData = require("./data");

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

// POPULAR DESTINATION CARD API
const destinationCardApi = async (req, res) => {
  try {
    res.json({ data: destinationData });
  } catch (error) {
    console.log("Destination card api error :", error);
  }
};

module.exports = { home, submitForm, destinationCardApi };
