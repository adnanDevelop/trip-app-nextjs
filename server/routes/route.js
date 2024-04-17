const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const formValidation = require("../validator/formValidation");
const validation = require("../middleware/validate-middleware");

router.route("/").get(authController.home);
router
  .route("/submitform")
  .post(validation(formValidation), authController.submitForm);
