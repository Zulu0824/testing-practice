export function capitalize(str) {
  const capitalized = str.chatAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  const reversed = str.split("").reverse().join("");
}
