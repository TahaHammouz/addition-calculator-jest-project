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
      if (arg1 >= 0 && arg1 < 1000) {
        return arg1;
      } else {
        return "0";
      }
    case 2:
      let firstArg = parseInt(arg[0]);
      let secondArg = parseInt(arg[1]);
      if (firstArg >= 0 && secondArg >= 0) {
        if (firstArg > 1000 && secondArg < 1000) {
          return String(secondArg);
        }
        if (secondArg > 1000 && firstArg < 1000) {
          return String(firstArg);
        }
        if (firstArg && secondArg > 1000) {
          return "0";
        }
        return firstArg + secondArg;
      } else if (firstArg < 0 && secondArg < 0)
        throw new Error(
          "negatives not allowed,you entered :" + firstArg + "," + secondArg
        );
      else if (firstArg < 0 && secondArg > 0) {
        throw new Error("negatives not allowed,you entered :" + firstArg);
      }
      throw new Error("negatives not allowed,you entered :" + secondArg);

    default:
      return "There is a problem with the arguments, please try again";
  }
}
module.exports = additionCalculator;
