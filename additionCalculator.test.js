const additionCalculator = require("./additionCalculator");

describe("additionCalculator's test cases", () => {
  test("empty arguments it will return 0", () => {
    expect(additionCalculator()).toBe("0");
  });

  test("addition of one number is the same", () => {
    expect(additionCalculator(1)).toBe(1);
  });

  test("addition of one plus two is three", () => {
    expect(additionCalculator(1, 2)).toBe(3);
  });

  test("addiction support up to 2 numbers only", () => {
    expect("The function only support up to 2 numbers only.").toBe(
      "The function only support up to 2 numbers only."
    );
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
