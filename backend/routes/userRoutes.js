const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendverification,
  findUser,
  sendResetPassword,
  validateResetCode,
  changePassword,
  getProfile,
} = require("../controllers/userController");
const authUser = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/resend", authUser, sendverification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordcode", sendResetPassword); 
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", getProfile);

module.exports = router;
