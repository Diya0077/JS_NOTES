console.log("It's me shruti")

let age = 1;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

// 1: Simple if statement
let number = 10;

if (number > 5) {
  console.log("The number is greater than 5."); // This will be logged.
}

// 2: if-else statement
let age1 = 20;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 3: if-else-if statement
let marks = 85;

if (marks >= 90) {
  console.log("You got an A+.");
} else if (marks >= 80) {
  console.log("You got an A.");
} else if (marks >= 70) {
  console.log("You got a B.");
} else {
  console.log("You need to study more.");
}

// 4: Nested if statement
let score = 75;
let attendance = 90;

if (score >= 50) {
  if (attendance >= 75) {
    console.log("You passed the course.");
  } else {
    console.log("You need better attendance to pass.");
  }
} else {
  console.log("You failed the course.");
}

// 5: Using logical operators with conditionals
let hasTickets = true;
let hasID = true;

if (hasTickets && hasID) {
  console.log("You can enter the concert.");
} else {
  console.log("You cannot enter the concert.");
}

// 6: Using the ternary operator for concise conditionals
let age2 = 16;
let result = (age2 >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);

// 7: Switch statement (alternative to if-else chains)
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday"); // Output: Wednesday
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day.");
}
