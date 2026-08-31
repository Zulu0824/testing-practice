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

// caesarCipher.js

function shiftChar(char, key) {
  const code = char.charCodeAt(0);

  if (isUpperCase(code)) {
    return String.fromCharCode(wrap(code, 65, key));
  }

  if (isLowerCase(code)) {
    return String.fromCharCode(wrap(code, 97, key));
  }

  return char; // non-alphabetical, leave as-is
}

function isUpperCase(code) {
  return code >= 65 && code <= 90;
}

function isLowerCase(code) {
  return code >= 97 && code <= 122;
}

function wrap(code, base, key) {
  return ((((code - base + key) % 26) + 26) % 26) + base;
}

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => shiftChar(char, key))
    .join("");
}

module.exports = caesarCipher;
