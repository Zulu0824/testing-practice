export function capitalize(str) {
  const capitalized = str.chatAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  const reversed = str.split("").reverse().join("");
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};
