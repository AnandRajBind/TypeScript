"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
    name;
    constructor(name) {
        this.name = name;
        this.name = name; // 'name' is private and can only be accessed within the class
    }
    changing() {
        this.name = "Updated Name"; // Accessing private property within the class
    }
}
let bo1 = new UserAccount("Anand"); // Creating an instance of UserAccount
bo1.changing(); // Calling the method to change the name property
// inheritance
// readonly are used to make a property immutable after initialization
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
    }
}
class MetalBottleMaker extends BottleMaker {
    name;
    constructor(name) {
        super(name); // Calling the parent class constructor
        this.name = name;
    }
    getValue() {
        console.log(this.name); // Accessing the name property of the instance
    }
}
let boottle1 = new MetalBottleMaker("chilton");
console.log(boottle1.name); // Accessing the name property of the instance
boottle1.getValue(); // Calling the method to get the value of the bottle
// protected ******************************************
class BottleMaker2 {
    name = "milton"; // 'name' is protected and can be accessed in subclasses and can not be accessed outside the class hierarchy
}
class MetalBottleMaker2 extends BottleMaker2 {
    material = "metal"; // 'material' is a public property of the subclass
    changeName() {
        this.name = "some Other Name";
    }
}
let b4 = new MetalBottleMaker2();
b4.changeName(); // Calling the method to change the name property
// getters and setters
class User {
    _name;
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    // getName(){
    //     return this.name; // Getter method to access the name property
    // }
    // setName(newName: string) {
    //     this.name = newName; // Setter method to update the name property
    // }
    // using get and set keywords
    get name() {
        return this._name; // Getter method to access the name property
    }
    set name(newName) {
        this._name = newName; // Setter method to update the name property
    }
}
let u1 = new User("Anand", 25);
// static keyword are used to define properties or methods that belong to the class itself rather than to instances of the class
// it is accesabe without creating the object of the class
class Shrey {
    static version = 1.0;
    static getRandomNumber() {
        return Math.random(); // Static method to generate a random number
    }
}
// abstract classes
class cookingEssentials {
    gas;
    gasName;
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class sabji extends cookingEssentials {
}
// functions
function abcde(name, age, cb) {
    cb("hello");
}
abcde("harsh", 25, (args) => {
    console.log("Callback function executed");
});
// optional and default parameters
function abcdef(name, age, gender, email = "defaultEmail@gmail.com") {
    console.log(name, age, gender, email);
}
abcdef("Anand", 25, "Male"); // Calling the function with required parameters
abcdef("lackbatack", 25);
// rest and spread operator
function sum(...arr) {
    console.log(arr); // Using rest parameter to accept multiple arguments as an array
    console.log(arr[0]); // Accessing individual elements of the rest parameter array
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); // Calling the function with rest parameters
//spread operator
var array = [1, 2, 3, 4, 5]; // Example array to demonstrate spread operator
var newArray = [...array, 6, 7, 8]; // Using spread operator to create a new array with additional elements
function abcdefgh(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("Function called with one string argument:", a);
    }
    if (typeof a === "string" && typeof b === "number") {
        console.log("Function called with string and number arguments:", a, b);
        return a.length + b; // Example implementation
    }
    // else throw new Error("Something in wrong");
}
abcdefgh("lackbatack"); // Calling the function with one string argument
abcdefgh("lackbatack", 25); // Calling the function with string and number arguments
// generics 
// Generics allow you to create reusable components that can work with any data type
// They provide a way to define functions, classes, and interfaces that can operate on different types
function genericFunction(arg) {
}
genericFunction("Hello, Generics!"); // Calling the generic function with a string argument
genericFunction(42); // Calling the generic function with a number argument
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function genericFunction2(a, b, c) {
    console.log(a, b, c); // Using the generic type 'H' to accept any type of argument
    return a; // Returning the argument of type 'H'
}
genericFunction2("Halua", "pudi", 42);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function log(value) {
    console.log(value); // Logging the value of type 'T'
}
log(12);
log("Hello, Generics!"); // function call karte time genenric type ko " log<string>("Hello, Generics!")" specify karna optional hai
log(true); // Calling the log function with a boolean argument
function GenericInterfaceFunction(obj) {
}
GenericInterfaceFunction({
    name: "Anand", age: 25, key: "someKey"
});
// generic class
class GenericClass {
    key;
    constructor(key) {
        this.key = key;
    }
}
let g1 = new GenericClass("Hello, Generics!"); // Creating an instance of GenericClass with a string type
//+++++++++++++++++++++++++++++++++++++++++++++++++
function genericFunction3(a, b) {
    // return "hey";  // it can be not possible becausr it is a string litral and T is a generic type
    return "hey"; // Using type assertion to return a string literal as type 'T'
    // return "hey" as T;    
}
genericFunction3("Hello", "World"); // Calling the generic function with string arguments
// Modules
const paymet_1 = require("./paymet"); // Importing functions from the 'paymet' module
(0, paymet_1.addPayment)(120); // Calling the addPayment function from the 'paymet' module
// default export ko import karte time {} ka use nahi hota  
const paymet_2 = __importDefault(require("./paymet")); // Importing the default class from the 'paymet' module
let payment = new paymet_2.default(700);
console.log(payment);
//Type  Assertions and Type castings
let s = 12; // 'a' is of type 'any'
//  (<number>s) // Type assertion to treat 's' as a number
s;
//  type casting
let d = Number("700");
console.log(typeof d); // Type casting to convert string to number
// non-null assertion operator
let g;
g = "Hello, World!"; // 'g' can be null, undefined, or a string
g; // Non-null assertion operator to assert that 'g' is never null or undefined
// type Guards, type narrowing hai. jab hame pata nhi hai ki variable ka type kya hai to usko check karne ke liye ham typeOf and if elase ka use karrte hai to use ham type narrowing kahate hai.
function random(arg) {
    if (typeof arg === "string") {
        return "string"; // If 'arg' is a string, convert it to uppercase
    }
    else if (typeof arg === "number") {
        return "number"; // If 'arg' is a string, convert it to uppercase
    }
}
console.log(random("Hello")); // Calling the function with a string argument
console.log(random(42)); // Calling the function with a number argument
class TVkaRemote {
    swichOffTV() {
        console.log("Remote is switched off");
    }
}
class CarkaRemote {
    swichOffCar() {
        console.log("Car ka Remote is switched off");
    }
}
const tv = new TVkaRemote();
const car = new CarkaRemote();
function switchOffDevice(device) {
    if (device instanceof TVkaRemote) {
        device.swichOffTV(); // If 'device' is an instance of TVkaRemote, call its method
    }
    else if (device instanceof CarkaRemote) {
        device.swichOffCar(); // If 'device' is an instance of CarkaRemote, call its method
    }
}
switchOffDevice(tv); // Calling the function with a TVkaRemote instance
switchOffDevice(car); // Calling the function with a CarkaRemote instance
//# sourceMappingURL=app.js.map