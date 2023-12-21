import { DisplayNodeJSInformation, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();

// Primitive Data Types
let bigInt    = BigInt("1234567890123456789");  // Big Int
let b         = true;                           // Boolean 
let count     = 4;                              // Number
let name      = "";                             // String
let symbol    = Symbol("dollar");               // Symbol
let n         = null;                           // Null
let u;                                          // Undefined
let exp1      = 123e5;                         // Exponent 12300000 
let exp2      = 123e-5;                        // Exponent 0.00123

LogMessage("Primitive Data Types");
LogMessage(`bigInt Type    : ${typeof(count)}`)  // Number
LogMessage(`b Type         : ${typeof(b)}`)      // Boolean
LogMessage(`count Type     : ${typeof(count)}`)  // Number
LogMessage(`name Type      : ${typeof(name)}`)   // String
LogMessage(`symbol Type    : ${typeof(symbol)}`) // Symbol
LogMessage(`null Type      : ${typeof(n)}`);     // Typeof Null Is Object
LogMessage(`undefined Type : ${typeof(u)}`);     // Typeof Undefined Is Undefined
LogMessage(`exp1 Type      : ${typeof(e1)}`)     // Number
LogMessage(`exp2 Type      : ${typeof(e2)}`)     // Number
LogMessage();

// Object Data Types
let days   = ["1", "2", "3", "4", "5", "6", "7"]; // Array
let dt     = new Date("2024-01-31");                 // Date
let person = { City : "State", Zip  : "29210" }; // Object

LogMessage("Object Data Types");               
LogMessage(`days Type      : ${typeof(days)}`);     // Typeof Array Is Object
LogMessage(`dt Type        : ${typeof(dt)}`);       // Typeof Date Is Object
LogMessage(`person Type    : ${typeof(person)}`);   // Typeof Person Is Object
