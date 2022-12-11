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
      console.log("The function only support up to 2 numbers only.");
  }
}
additionCalculator(1, 4);

module.exports = additionCalculator;
