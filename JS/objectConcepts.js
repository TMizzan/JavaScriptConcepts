import { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();


// HasOwnProperty
LogMessage('HasOwnProperty Example');
const plane = { model : "Cessna", year  : "2024" };
LogMessage(`HasOwnProperty plane.name  : ${plane.hasOwnProperty('name')}`);
LogMessage(`HasOwnProperty plane.vin   : ${plane.hasOwnProperty('vin')}`);
LogMessage(`HasOwnProperty plane.model : ${plane.hasOwnProperty('model')}`);
LogMessage(`HasOwnProperty plane.year  : ${plane.hasOwnProperty('year')}`);
LogMessage();


// Is
LogMessage('Is Example');
const boat = { model : "Swift", year  : "2025" };
LogMessage(`Is plane/plane : ${Object.is(plane, plane)}`);
LogMessage(`Is plane/boat  : ${Object.is(plane, boat)}`);
LogMessage();


// IsExtensible
LogMessage('IsExtensible Example');
const extensibleObject = {};
LogMessage(`IsExtensible                      : ${Object.isExtensible(extensibleObject)}`);
Object.preventExtensions(extensibleObject);
LogMessage(`IsExtensible - Prevent Extensions : ${Object.isExtensible(extensibleObject)}`);
LogMessage();


// IsFrozen
LogMessage('IsFrozen Example');
const frozenObject = {};
LogMessage(`IsFrozen          : ${Object.isFrozen(frozenObject)}`);
Object.freeze(frozenObject);
LogMessage(`IsFrozen - Frozen : ${Object.isFrozen(frozenObject)}`);
LogMessage();


// IsPrototype
LogMessage('IsPrototype Example');
class Vehicle {}
class Car extends Vehicle {}
class SportsCar extends Car {}
let vehicle = new Vehicle();
let car = new Car();
let sportsCar = new SportsCar();
// vehicle   : Vehicle > Object
// car       : Car > Vehicle > Object
// sportsCar : SportsCar > Car > Vehicle > Object 
LogMessage(`Sports Car - Transportation : ${SportsCar.prototype.isPrototypeOf(vehicle)}`);
LogMessage(`Car - Sports Car            : ${Car.prototype.isPrototypeOf(sportsCar)}`);
LogMessage(`Vehicle - Car               : ${Vehicle.prototype.isPrototypeOf(car)}`);
LogMessage();


// Sealed
LogMessage('Sealed Example');
const sealedClass = {}
LogMessage(`Is Sealed                : ${Object.isSealed(sealedClass)}`);
Object.seal(sealedClass);
LogMessage(`Is Sealed - After Sealed : ${Object.isSealed(sealedClass)}`);
LogMessage();

// 
// LogMessage('Example');
// LogMessage(`${}`);
// LogMessage();
