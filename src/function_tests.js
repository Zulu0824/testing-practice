import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

describe("capitalize", () => {
  test("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("leaves an already-capitalized string unchanged", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("handles an empty string", () => {
    expect(reverseString("")).toBe("");
  });
});

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe("caesarCipher", () => {
  test("wraps z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves letter case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("leaves punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray", () => {
  test("returns average, min, max, and length", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("handles a single-element array", () => {
    expect(analyzeArray([7])).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    });
  });
});
