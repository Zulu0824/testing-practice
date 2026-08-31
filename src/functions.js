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

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((((code - 65 + key) % 26) + 26) % 26) + 65);
      }

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((((code - 97 + key) % 26) + 26) % 26) + 97);
      }

      return char;
    })
    .join("");
}

console.log(caesarCipher("xyz", 3));
