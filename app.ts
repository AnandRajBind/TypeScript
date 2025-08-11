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

function greet(a: number, b: string): void| string {
    return `Hello ${b}, your number is ${a}`;
}
greet(5, "John"); // Returns a string


// interface -> used to define the structure of an object
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
    gender?: string; // Optional property
}

function getDataOfUser(obj:User){
obj.email
}

getDataOfUser({id: 1, name: "John Doe", email: "aananan", }); // 'age' is not defined in the User interface, so it will cause an errorz


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
interface abcd{
    id: number;
}

interface abcd{
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

