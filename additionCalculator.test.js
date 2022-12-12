const additionCalculator = require("./additionCalculator");

describe("additionCalculator's test cases", () => {
  test("empty arguments it will return 0", () => {
    let empty = "";
    expect(additionCalculator(empty)).toBe("0");
  });
  test("one number entered", () => {
    expect(additionCalculator(1)).toBe(1);
  });
  test("one negative number entered", () => {
    let num1 = String(-1);
    try {
      additionCalculator(num1);
    } catch (error) {
      expect(error.message).toBe("negatives not allowed,you entered :" + num1);
    }
  });

  test("both numbers are negative", () => {
    let num1 = String(-1);
    let num2 = String(-2);
    try {
      additionCalculator(num1, num2);
    } catch (error) {
      expect(error.message).toBe(
        "negatives not allowed,you entered :" + num1 + "," + num2
      );
    }
  });
  test("first number is negative", () => {
    let num1 = String(-1);
    let num2 = String(2);
    try {
      additionCalculator(num1, num2);
    } catch (error) {
      expect(error.message).toBe("negatives not allowed,you entered :" + num1);
    }
  });
  test("second number is negative", () => {
    let num1 = String(1);
    let num2 = String(-2);
    try {
      additionCalculator(num1, num2);
    } catch (error) {
      expect(error.message).toBe("negatives not allowed,you entered :" + num2);
    }
  });

  test("addition of one plus two is three", () => {
    let one = String(1);
    let two = String(2);
    expect(additionCalculator(one, two)).toBe(parseInt(one) + parseInt(two));
  });
  test("unknown amount of numbers", () => {
    let str = String(1);
    let str1 = String(2);
    let str2 = String(3);
    expect(additionCalculator(str, str1, str2)).toBe(
      "There is a problem with the arguments, please try again"
    );
  });
});
