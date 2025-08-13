"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, World!");
console.log("This is a simple TypeScript application.");
console.log("Let's explore TypeScript features.");
// tuples used for fixed-length arrays with mixed types
let arr = [1, "one"];
// Enumes -> enumeration types
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOT_FOUND;
// define a typescript of variable
// Any, unknown, never, void, Null, Undefined
let a; // 'a' is type of'any' by default. any and unkonwn me kuch bhi ho sakta hai.while unknow ka use karte time use check karna padega uska type.  Like a = 5, a = "Hello", a = true, etc.
a = 12;
a = "Hello"; // 'a' can be reassigned to a different type
if (typeof a === "string") {
    a.toUpperCase(); // Safe to call string method
}
// 'unknown' type requires type checking before use
let b; // 'b' is explicitly typed as a number
let c;
function abcd() {
    console.log("This function does not return a value.");
}
// function demo(): never {
//     while (true) {
//         console.log("This function never returns.");
//     }
// }
// demo(); // This will run indefinitely'
console.log("End of the TypeScript application.");
//Type Inference
let x = 10; // TypeScript infers 'x' as number
// Type annotation
let y; // Explicitly typed as string
function greet(a, b) {
    return `Hello ${b}, your number is ${a}`;
}
greet(5, "John"); // Returns a string
function getDataOfUser(obj) {
    obj.email;
}
getDataOfUser({ id: 1, name: "John Doe", email: "aananan", }); // 'age' is not defined in the User interface, so it will cause an errorz
function getAdminData(obj) {
    obj.admin;
}
function getMergedData(obj) {
    console.log(`ID: ${obj.id}, Name: ${obj.name}`);
}
getMergedData({ id: 1, name: "Merged User" }); // Merged interface works as expected
let z;
function processValue(val) {
}
processValue("Hello"); // Valid
function processIntersection(obj) {
    obj.id;
}
// class 
class Device {
    name = "LG";
    price = 12000;
    category = "Digital";
}
let d1 = new Device();
let d2 = new Device();
console.log(d1.name, d1.price, d1.category); // Accessing properties of the class instance
console.log(d2.name, d2.price, d2.category); // Accessing properties of
// constructor
// constructor me real data nhi hota only real data ka sape hota hai(yani ki koi bhi chiz banane/Maker wala like- bottelmaker, HumanMaker).
// Parle G Factory-> Machine-> machine se real data banta hai.(biskit)
// must be used public 
// method one create a constructor with public properties
class bottleMaker {
    name;
    price;
    thumbnail;
    constructor(name, price, quentity = 0, thumbnail = "default-thumbnail.jpg") {
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        if (!thumbnail) {
            this.thumbnail = "default-thumbnail.jpg"; // Default thumbnail if not provided
        }
    }
}
let b1 = new bottleMaker("Milton", 1200, 12, "");
let b2 = new bottleMaker("cello", 900, 12, "");
b1.name = "Updated Milton"; // Updating the name property of b1 instance
// method two create a constructor with public properties
class MusicPlayer {
    name;
    price;
    volume;
    constructor(name, price, volume = 50) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
}
let m1 = new MusicPlayer("Sony", 15000, 30);
let m2 = new MusicPlayer("JBL", 10000, 40);
// this keyword 
class Abcd {
    name = "Anand";
    changeName(newName) {
        this.name = newName; // Using 'this' to refer to the current instance's property
        this.changeSomeMoreStuff();
    }
    changeSomeMoreStuff() {
    }
}
let obj = new Abcd(); // Call the method to change the name property;
obj.changeName("Updated Anand"); // Changing the name property using the method
// Access Modifiers public, private, protected
class UserAccount {
    BankName;
    constructor(BankName) {
        this.BankName = BankName;
    }
}
//# sourceMappingURL=app.js.map