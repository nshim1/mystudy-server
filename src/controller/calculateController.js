import { CommonService } from "../service/commonService";
export const calculateController = {
  getSum: function (req, res) {
    const commonService = new CommonService();
    var params = req.params;
    console.log(params);
    const sum = commonService.sum({
      num1: Number(req.params.num1),
      num2: Number(req.params.num2),
    });
    res.json({
      sum,
    });
  },
  getSumJquery: (req, res) => {
    const commonService = new CommonService();
    const sum2 = commonService.sum({
      num1: Number(req.query.num1),
      num2: Number(req.query.num2),
    });
    res.json({
      sum2,
    });
  },
  getDivision: (req, res) => {
    const commonService = new CommonService();
    var n1 = req.query.num1;
    var n2 = req.query.num2;
    const division = commonService.divide(n1, n2);
    res.json({
      division,
    });
  },
};
