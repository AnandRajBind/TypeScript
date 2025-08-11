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
//# sourceMappingURL=app.js.map