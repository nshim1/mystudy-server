import { commonService } from "../service/commonService";
export const userController = {
  getUID: function (req, res) {
    res.json({
      id: commonService.randomNumber(),
    });
  },
};
