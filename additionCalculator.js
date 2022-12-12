function additionCalculator(...stringNumbers) {
  var arg = stringNumbers;
  var argLength = arg.length;

  console.log("array length : " + argLength);
  switch (argLength) {
    case 1:
      let arg1 = parseInt(arg[0]);
      if (arg[0] == "" && arg[0] == 0) return "0";
      if (arg1 < 0) {
        throw new Error("negatives not allowed,you entered :" + arg1);
      }
      if (arg1 >= 0) {
        return arg1;
      }

    case 2:
      let firstArg = parseInt(arg[0]);
      let secondArg = parseInt(arg[1]);

      if (firstArg >= 0 && secondArg >= 0) return firstArg + secondArg;
      else if (firstArg < 0 && secondArg < 0)
        throw new Error(
          "negatives not allowed,you entered :" + firstArg + "," + secondArg
        );
      else if (firstArg < 0 && secondArg > 0) {
        throw new Error("negatives not allowed,you entered :" + firstArg);
      } else if (firstArg > 0 && secondArg < 0) {
        throw new Error("negatives not allowed,you entered :" + secondArg);
      }
    default:
      return "There is a problem with the arguments, please try again";
  }
}
module.exports = additionCalculator;
