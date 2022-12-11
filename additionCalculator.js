function additionCalculator(...numbers) {
  var arg = numbers;
  var argLength = arg.length;
  switch (argLength) {
    case 0:
      return "0";
    case 1:
      return arg[0];
    case 2:
      return arg[0] + arg[1];
    default:
      return "There is a problem with the arguments, please try again";
  }
}
additionCalculator(1, 4, 7);

module.exports = additionCalculator;
