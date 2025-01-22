// Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "sports"],
    address: {
        city: "New York",
        zipCode: "10001"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person object:", person);
console.log("Full Name:", person.fullName());

// Object with Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Tesla", "Model X", 2023);
console.log("Car object:", myCar);

// Accessing properties
console.log("Person's city:", person.address.city);
console.log("Person's age before update:", person.age);

// Modifying properties
person.age = 31;
console.log("Person's age after update:", person.age);

// Adding new properties
person.gender = "Male";
console.log("Person object after adding gender:", person);

// Deleting properties
delete person.isStudent;
console.log("Person object after deleting isStudent:", person);

// Object Methods
let student = {
    name: "Alice",
    greet: function() {
        return "Hello, " + this.name;
    }
};
console.log(student.greet());

// Iterating through object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Object built-in methods
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Converting to JSON and back
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

let newPerson = JSON.parse(jsonString);
console.log("Converted back to Object:", newPerson);
