import { CommonService } from "../service/commonService";

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
};
