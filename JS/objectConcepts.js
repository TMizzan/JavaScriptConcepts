import { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage } from './utils.js';


// Display NodeJS Information
DisplayNodeJSInformation();


// Assign
LogMessage('Assign Example');
const moped      = { passengers: 2, seats : 1 };
const motorcycle = { mirrors: 4, wheels : 2 };
const cycle      = Object.assign(motorcycle, moped);
LogMessage(`Motorcylce           : ${motorcycle}`);
LogMessage(`Cycle (Combined)     : ${cycle}`);
LogMessage(`Cycle === Motorcycle : ${(cycle === motorcycle)}`);
LogMessage(`Cycle === Moped      : ${(cycle === moped)}`);
LogMessage();


// Create 
LogMessage('Create Example');
const harleyDavidson = Object.create(motorcycle); 
LogMessage(`Harley-Davidson : Seats - ${harleyDavidson.seats}, Mirrors - ${harleyDavidson.mirrors}`);
LogMessage();


// DefineProperties
LogMessage('DefineProperties Example');
Object.defineProperties(harleyDavidson,  
                        {
                            engine: {
                                        value    : 'milwaukeeEight114',
                                        writable : true  
                                    },
                            color: {
                                        value    : 'black',
                                        writable : true
                                    },
                        });
LogMessage(`DefineProperties : HD Engine - ${harleyDavidson.engine}, HD Color - ${harleyDavidson.color}`);
LogMessage();


// Entries 
LogMessage('Entries Example');
for (const [key, value] of Object.entries(cycle)) {
    LogMessage(`Entries : key - ${key}, value - ${value}`);
}
LogMessage();


// Freeze
LogMessage('Freeze Example');
const freezObject = { bike: "Schwinn" };
Object.freeze(freezObject);
try {
    freezObject.bike = "Huffy";
}
catch (ex) {
    LogMessage(`Freeze : ${ex}`);
}
LogMessage();


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
