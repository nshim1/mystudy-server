import { CommonService } from "../service/commonService";
import * as userService from "../service/userService";
import { User } from "../model/User";
const commonService = new CommonService();
export const userController = {
  getUID: function (req, res) {
    const userId = commonService.randomNumber();
    res.json({
      //   id: commonService.randomNumber(),
      userId,
      /** userId: userId  when the name of key and value are same, omit */
    });
  },
  getEmailTemplate: function (req, res) {
    const template = userService.getEmailTemplate(req.body.name);
    res.json({
      template,
    });
  },
  signUp: function (req, res) {
    userService.signUp({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({
      message: "successfully signed up!",
    });
  },

  signIn: function (req, res) {
    const isAuth = userService.signIn({
      email: req.body.email,
      password: req.body.password,
    });
    if (isAuth) {
      res.json({
        message: "success",
      });
    } else {
      res.json({ message: "fail" });
    }
  },
};
