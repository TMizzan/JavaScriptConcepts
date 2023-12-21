import { DisplayNodeJSInformation, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();

// Data Types
let firstName = "";     // String
let count     = 4;      // Number
let x         = true;   // Boolean 
let y         = null;   // Null
let z;                  // Undefined
let range     = [];     // Array

let person = { City : "State",          // Object
               Zip  : "29210" };

let dt = new Date("2024-01-31");         // Date
let a  = 123e5;                          // Exponent 12300000 
let b  = 123e-5;                         // Exponent 0.00123
let c  = BigInt("1234567890123456789");  // Big Int

LogMessage('Undefined : ' + typeof(undefined));  // Typeof Undefined Is Undefined
LogMessage('Null      : ' + typeof(null));       // Typeof Null Is Object
