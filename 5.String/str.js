// Why learn this?
// String methods make it easy to manipulate text data in JavaScript.

const str = "Hello, World!";
console.log(str.length); // Returns the length of the string.
console.log(str.toUpperCase()); // Converts string to uppercase.
console.log(str.toLowerCase()); // Converts string to lowercase.
console.log(str.indexOf("World")); // Returns the index of the substring.
console.log(str.slice(0, 5)); // Extracts part of the string.
console.log(str.replace("World", "JavaScript")); // Replaces substring.
console.log(str.split(", ")); // Splits the string into an array.

// Additional string methods:
console.log(str.trim()); // Removes whitespace from both ends.
console.log(str.startsWith("Hello")); // Checks if string starts with a given substring.
console.log(str.endsWith("!")); // Checks if string ends with a given substring.
console.log(str.includes("World")); // Checks if string contains a substring.
console.log(str.repeat(2)); // Repeats the string.