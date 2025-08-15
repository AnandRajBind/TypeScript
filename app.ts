console.log("Hello, World!");
console.log("This is a simple TypeScript application.");

console.log("Let's explore TypeScript features.");


// tuples used for fixed-length arrays with mixed types
let arr: [number, string] = [1, "one"];

// Enumes -> enumeration types
enum UserRoles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}
UserRoles.ADMIN;

enum StatusCodes {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

StatusCodes.NOT_FOUND;


// define a typescript of variable

// Any, unknown, never, void, Null, Undefined

let a;  // 'a' is type of'any' by default. any and unkonwn me kuch bhi ho sakta hai.while unknow ka use karte time use check karna padega uska type.  Like a = 5, a = "Hello", a = true, etc.
a = 12;
a = "Hello"; // 'a' can be reassigned to a different type
if (typeof a === "string") {

    a.toUpperCase(); // Safe to call string method
}
// 'unknown' type requires type checking before use

let b: number; // 'b' is explicitly typed as a number

let c: null;
function abcd(): void {
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

let y: string | boolean | number; // Explicitly typed as string

function greet(a: number, b: string): void | string {
    return `Hello ${b}, your number is ${a}`;
}
greet(5, "John"); // Returns a string


// interface -> used to define the structure of an object
interface User {
    id: number;
    _name: string;
    email?: string; // Optional property
    gender?: string; // Optional property
}

function getDataOfUser(obj: User) {
    obj.email
}

// getDataOfUser({ id: 1, name: "John Doe", email: "aananan", }); // 'age' is not defined in the User interface, so it will cause an errorz


// extending interfaces
interface User2 {
    id: number;
    name: string;
    email?: string; // Optional property
}
interface Admin extends User2 {
    admin: string; // Admin-specific property
}

function getAdminData(obj: Admin) {
    obj.admin
}

// Merging interfaces
// TypeScript allows interfaces with the same name to be merged
interface abcd {
    id: number;
}

interface abcd {
    name: string; // This will merge with the previous 'abcd' interface
}

function getMergedData(obj: abcd) {
    console.log(`ID: ${obj.id}, Name: ${obj.name}`);
}
getMergedData({ id: 1, name: "Merged User" }); // Merged interface works as expected


// Type alias -> used to create a new name for a type

type sankhya = number | string; // 'sankhya' can be either a number or a string

type args = string | boolean | number; // 'value' can be either a string, boolean, or number

let z: args;

function processValue(val: args) {


}
processValue("Hello"); // Valid


// union types -> allows a variable to hold multiple types

type UnionType = string | number | boolean; // 'UnionType' can be a string, number, or boolean


// intersection types -> combines multiple types into one

type IntersectionType = {
    id: number;
    name: string
}; // 'IntersectionType' has both 'id' and 'name' properties

type ExtendedType = IntersectionType & {
    email: string
}; // 'ExtendedType' has 'id', 'name', and 'email' properties

function processIntersection(obj: ExtendedType) {
    obj.id
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
    constructor(public name: string, public price: number, quentity: number = 0, public thumbnail: string = "default-thumbnail.jpg") {

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
    public name;
    public price;
    public volume;
    constructor(name: string, price: number, volume: number = 50,) {
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
    changeName(newName: string) {
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
    constructor(private name: string) {
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
    constructor(public readonly name: string) {
    }
}

class MetalBottleMaker extends BottleMaker {
    constructor(public name: string) {
        super(name); // Calling the parent class constructor
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
    protected name: string = "milton"; // 'name' is protected and can be accessed in subclasses and can not be accessed outside the class hierarchy
}
class MetalBottleMaker2 extends BottleMaker2 {
    public material = "metal"; // 'material' is a public property of the subclass
    changeName() {
        this.name = "some Other Name";
    }
}

let b4 = new MetalBottleMaker2();
b4.changeName(); // Calling the method to change the name property


// getters and setters
class User {
    constructor(public _name: string, public _age: number) {
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
    set name(newName: string) {
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
    constructor(public gas: number, public gasName: string) {

    }
}
class sabji extends cookingEssentials {
}

// functions

function abcde(name: string, age: number, cb: (args: string) => void) {
    cb("hello");
}

abcde("harsh", 25, (args: string) => {// finction call
    console.log("Callback function executed");
});

// optional and default parameters

function abcdef(name: string, age: number, gender?: string,email: string="defaultEmail@gmail.com"){
console.log(name,age,gender,email)
}
abcdef("Anand", 25,"Male"); // Calling the function with required parameters
abcdef("lackbatack", 25); 


// rest and spread operator

function sum(...arr: number[]){// rest 
console.log(arr); // Using rest parameter to accept multiple arguments as an array
console.log(arr[0]); // Accessing individual elements of the rest parameter array
}
sum(1, 2, 3, 4, 5,6,7,8,9); // Calling the function with rest parameters


//spread operator
var array= [1, 2, 3, 4, 5]; // Example array to demonstrate spread operator
var newArray = [...array, 6, 7, 8]; // Using spread operator to create a new array with additional elements

// function overloading

function abcdefgh(a:String):void;// function signature
function abcdefgh(a:String, b:number):number;

function abcdefgh(a: any, b?:any){
    if(typeof a=== "string" && b === undefined) {
        console.log("Function called with one string argument:", a);
    } if (typeof a === "string" && typeof b === "number") {
        console.log("Function called with string and number arguments:", a, b);
        return a.length + b; // Example implementation
    }
    // else throw new Error("Something in wrong");
}

abcdefgh("lackbatack"); // Calling the function with one string argument
abcdefgh("lackbatack", 25); // Calling the function with string and number arguments

// generics 

  