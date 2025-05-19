//  let book = {
//     author: "Mark Benson",
//     title: "THE BOY NAMED KUNLE",
//     yearPublished: 2023,
//     isAvailable : true,

//     borrowBook: function() {
//         return isAvailable = false;
//     }
//  }

//  console.log(book.author);
//   console.log(book["title"]);
//    console.log(book.year);

//  let user = {
//     name: "Mark Zuks",
//     email: "johnrosey4@gmail.com",
//     age: 20,
//     //   Talents
//     borrowBook: function() {
//         return isAvailable = true;
//         isAvailable = false;
//     }
//  }

//  console.log("My name is " + user.name);
//  console.log(user["email"]);
//  console.log("I am " + user.age + " Years old.");
//  console.log(user.talent());

// console.log(book.borrowBook());
// console.log(book.isAvailable);


//  let person = {
//     name: "Mark Benson",
//     city: "New york",
//     age: 20,
    
//     //A  method to introduce yourself
//     introduce: function() {
//         return "Hi, I'm " + person.name + ", " + person.age + " years old, and I live in " + person.city;
//     }
//  }

//  console.log(person.introduce());


// let firstName = "Chinenye";
// let lastName = "Ndubuisi";
// let age = 20;
// let driverLicense = false;
// let dreamJob;
// dreamJob = "Full Stack developer";

//  console.log(firstName);
//  console.log(lastName);
//  console.log(age);
//  console.log(driverLicense);
//  console.log(dreamJob);


// let johnAge = 37;
// let markAge = 30;

// let avg = (johnAge + markAge)/2;
// console.log(avg);


// /task3
// let userAge = {
//     john: 33,
//     mark: 18,
//     kunle: 23,
//     victor: 63,
//     kyle: 14,

//     avg: function(){
//         return (this.john + this.kunle + this.victor + this.mark + this.kyle)/5
//     }

// }

// console.log(userAge.avg())


// task4

// let variables = [12, "chichi", true, undefined]
// let varType;


//     variables.forEach(variable => {
//         varType = console.log(typeof variable);
//     });

// console.log(varType);

// task5

function bmi (weight, height){
        return weight / (height ** 2)
    }

let mark = {
    height: 1.69,
    weight: 78,
}

let markBMI = bmi(mark.weight, mark.height);

let john = {
    height: 1.95,
    weight: 92,
}
let johnBMI = bmi(john.weight, john.height);

let  markHigerBMI = markBMI == johnBMI;

console.log("Mark's BMI is higher than John? " + markHigerBMI);

// console.log(Math.floor(mark.markBMI));
// console.log(Math.floor(john.markBMI));
