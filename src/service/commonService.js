export const commonService = {
  randomNumber: function () {
    const size = 6;
    return String(Math.floor(Math.random() * 10 ** size)).padStart(size, "0");
  },
};

// export class commonService {
//   randomNumber() {
//     const size = 6;
//     return String(Math.floor(Math.random() * 10 ** size)).padStart(size, "0");
//   }
// }
