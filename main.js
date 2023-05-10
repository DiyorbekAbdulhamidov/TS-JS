"use strict";
// ✅ Expression vs Statement 👍🏻
// let a: number =  2 + 3;
// let b: number = 3;
// a > b  ?console.log(true) : console.log(false);
// ✅ Getters && Setters 👍🏻
// export class Person {
//     private name: string = "DIYORBEK" // private = restricted access
//     // Getter
//     getName() {
//         return this.name;
//     }
//     // Setter
//     setName(newName: string) {
//         this.name = newName;
//     }
// }
// ✅ Prototype && Prototype Chain 👍🏻
// let obj = {};
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);
// let a = 12;
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);
// class Per{
//     constructor(public name: string){}
// }
// let per = new Per("drk");
// console.log(per.__proto__.__proto__);
// ✅ OOP && Object.create && Object.assign
// const per = {name: "drk", age: 12, run(){ return false}};
// const per2 = Object.create(per);
// console.log(per2);
// console.log(per2 === per);
// ✅ Promises && Async/Await
// // Promises
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data has been fetched successfully!');
//         }, 2000);
//     });
// }
// getData()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// // Async/Await
// async function fetchData() {
//     try {
//         const result = await getData();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchData();
// ✅ call && bind && apply function methods 👍🏻
// const car = {
//     brand: "BMW",
//     model: "X5",
//     getCarDetails: function(year:string, color:string) {
//       console.log(`This ${this.brand} ${this.model} was made in ${year} and has a ${color} color`);
//     },
//   };
//   car.getCarDetails("2021", "black"); // This BMW X5 was made in 2021 and has a black color
//   const anotherCar = {
//     brand: "Mercedes-Benz",
//     model: "GLS",
//   };
//   // call method
//   car.getCarDetails.call(anotherCar, "2020", "white"); // This Mercedes-Benz GLS was made in 2020 and has a white color
//   // apply method
//   const carDetails = ["2019", "red"];
//   car.getCarDetails.apply(anotherCar, carDetails); // This Mercedes-Benz GLS was made in 2019 and has a red color
//   // bind method
//   const boundGetCarDetails = car.getCarDetails.bind(anotherCar, "2022", "silver");
//   boundGetCarDetails(); // This Mercedes-Benz GLS was made in 2022 and has a silver color
// ✅ Factory function 👍🏻
// function createPerson(name:string, age:number, gender:string) {
//     return {
//       name: name,
//       age: age,
//       gender: gender,
//       sayHello: function() {
//         console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
//       }
//     };
//   }
//   const person1 = createPerson("John", 25, "male");
//   const person2 = createPerson("Jane", 30, "female");
//   person1.sayHello(); // "Hello, my name is John, and I am 25 years old."
//   person2.sayHello(); // "Hello, my name is Jane, and I am 30 years old."
// ✅ Abstraction 👍🏻  
// class Car {
//     constructor(public brand:string, public model:string,public year:string,public color:string) {}
//     startEngine() {
//       console.log(`The ${this.brand} ${this.model} has started the engine.`);
//     }
//     stopEngine() {
//       console.log(`The ${this.brand} ${this.model} has stopped the engine.`);
//     }
//   }
//   const car = new Car("BMW", "X5", "2021", "black");
//   car.startEngine(); // The BMW X5 has started the engine.
//   car.stopEngine(); // The BMW X5 has stopped the engine.
// ✅ Arrow Function vs Function Declaration 👍🏻
// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log("Assalomu alaykum, mening ismim " + this.name);
//     },
//     greetArrow: () => {
//       console.log("Assalomu alaykum, mening ismim " + this.name)
//     }
//   };
//   person.greet(); // Assalomu alaykum, mening ismim John
//   person.greetArrow(); // Assalomu alaykum, mening ismim undefined
// Function declaration
// function sum(a:number, b:number, c: string) {
//     console.log(arguments); // [1, 2]
//     return a + b;
//   }
//   sum(1, 2, "hello");
// Arrow function
//   const sum = (a:number, b:number) => {
//     console.log(arguments); // ReferenceError: arguments is not defined
//     return a + b;
//   }
//   sum(1, 2);
// ✅ Constructor function 👍🏻
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.greet = function() {
//       console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     };
//   }
// const person1 = new Person('John', 25, 'male');
// const person2 = new Person('Jane', 30, 'female');
// person1.greet(); // Output: Hello, my name is John and I'm 25 years old.
// person2.greet(); // Output: Hello, my name is Jane and I'm 30 years old.
// Object Static Methods
//    🍩 Object.defineProperty 👍🏻
//    🍩 Object.defineProperties 👍🏻
//    🍩 Object.freeze 👍🏻
//    🍩 Object.hasOwnProperty 🗑️ 👍🏻
//    🍩 Object.keys 👍🏻
//    🍩 Object.values 👍🏻
//    🍩 Object.entries 👍🏻
// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     fullName: string;
//     jobTitle: string;
//     email: string;
//   }
//   const person: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     get fullName(): string {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value: string) {
//       const parts = value.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   };
//   Object.defineProperties(person, {
//     jobTitle: {
//       value: "Developer",
//       writable: true
//     },
//     email: {
//       value: "john.doe@example.com",
//       writable: true
//     }
//   });
//   console.log(person.jobTitle); // Developer
//   console.log(person.email); // john.doe@example.com
//   Object.freeze(person);
//   person.age = 40;
//   console.log(person.age); // 30
//   console.log(person.hasOwnProperty("firstName")); // true
//   console.log(person.hasOwnProperty("fullName")); // false
//   console.log(Object.keys(person)); // ["firstName", "lastName", "age", "jobTitle", "email", "fullName"]
//   console.log(Object.values(person)); // ["John", "Doe", 30, "Developer", "john.doe@example.com", "John Doe"]
//   console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ["age", 30], ["jobTitle", "Developer"], ["email", "john.doe@example.com"], ["fullName", "John Doe"]]
// const car = {
//     name : "Gentra",
//     poz : 3
// };
// for (const key in car) {
//     console.log(key, car[key]);
// }
// Prototype
// const personPrototype = {
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
//   const person = Object.create(personPrototype);
//   person.firstName = "John";
//   person.lastName = "Doe";
//   console.log(person.getFullName()); // John Doe
// const proto = {
//     greeting: "Hello, world!",
//     greet: function() {
//       console.log(this.greeting);
//     }
//   };
//   const obj = Object.create(proto);
//   obj.greet(); // "Hello, world!";
// ✅ Inheritance
// // Person klassi
// class Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// // Child klassi
// class Child extends Person {
//     hobby: string;
//     constructor(firstName: string, lastName: string, age: number, hobby: string) {
//         super(firstName, lastName, age);
//         this.hobby = hobby;
//     }
//     greet() {
//         console.log(`Assalomu alaykum, mening ismim ${this.firstName}, yoshim ${this.age} da, va men ${this.hobby} bilan shug'ullanaman`);
//     }
// }
// // Child klassidan obyekt yaratamiz
// const child = new Child("Ali", "Valiev", 7, "chiziqlik");
// // Child klassidagi aloqa usullarini chaqirish
// console.log(child.fullName()); // Ali Valiev
// child.greet(); // Assalomu alaykum, mening ismim Ali, yoshim 7 da, va men chiziqlik bilan shug'ullanaman
// const arr = [1,3,4,{name:"DIUUrhwg",description:"sdsd"}];
// const a = [...arr];
// const b = a;
// const c = b
// // console.log(b[4]);
// function deepClone(arr:[]) {
//     let clone = Array.isArray(arr) ? [] : {};
//     for (let i in arr) {
//       if (typeof arr[i] == "object" && arr[i] != null) {
//         clone[i] = deepClone(arr[i]);
//       } else {
//         clone[i] = arr[i];
//       }
//     }
//     return clone;
//     }
// console.log(arr[3]);
