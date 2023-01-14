// export const commonService = {
//   randomNumber: function () {
//     const size = 6;
//     return String(Math.floor(Math.random() * 10 ** size)).padStart(size, "0");
//   },
// };

export class CommonService {
  randomNumber() {
    const size = 6;
    return String(Math.floor(Math.random() * 10 ** size)).padStart(size, "0");
  }
  sum({ num1, num2 }) {
    return num1 + num2;
  }
  divide(num1, num2) {
    if (num2 != 0) {
      var result = num1 / num2;
      console.log(typeof result);
      return result;
    }
  }
}
