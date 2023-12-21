import { DisplayNodeJSInformation, LogMessage } from './utils.js';


// Display NodeJS Information
DisplayNodeJSInformation();


// Assign
LogMessage('Assign Example');
const moped      = { passengers: 2, seats : 1 };
const motorcycle = { mirrors: 4, wheels : 2 };
LogMessage(`Motorcycle Keys       : ${Object.keys(motorcycle).sort()}`);

const cycle = Object.assign(motorcycle, moped);
LogMessage(`Cycle Keys (Combined) : ${Object.keys(cycle).sort()}`);
LogMessage(`Cycle === Motorcycle  : ${(cycle === motorcycle)}`);
LogMessage(`Cycle === Moped       : ${(cycle === moped)}`);
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


// FromEntries
const speedBoatEntries = new Map ([['name', 'WaveRunner'], ['type', 'speed']]);
const speedBoat = Object.fromEntries(speedBoatEntries);
LogMessage('FromEntries Example');
LogMessage(`FromEntries : SpeedBoat Name: ${speedBoat.name}, SpeedBoat Type: ${speedBoat.type}`);
LogMessage();


// GetOwnPropertyDescriptor 
LogMessage('GetOwnPropertyDescriptor Example');
const passengersDescription = Object.getOwnPropertyDescriptor(moped, 'passengers');
LogMessage(`GetOwnPropertyDescriptor Passengers Configurable: ${passengersDescription.configurable}`);
LogMessage();


// GetOwnPropertyDescriptors
LogMessage('GetOwnPropertyDescriptors Example');
const seatsDescription = Object.getOwnPropertyDescriptor(moped, 'seats');
LogMessage(`GetOwnPropertyDescriptors Seats Writable       : ${passengersDescription.writable}`);
LogMessage(`GetOwnPropertyDescriptors Seats Value Writable : ${passengersDescription.value}`);
LogMessage();


// GetOwnPropertyNames
LogMessage('GetOwnPropertyNames Example');
LogMessage(`GetOwnPropertyNames Moped : ${Object.getOwnPropertyNames(moped)}`);
LogMessage();


// GetOwnPropertySymbols
LogMessage('GetOwnPropertySymbols Example');
const symbolClass   = Symbol('class');
const symbolWeight  = Symbol.for('weight');
moped[symbolClass]  = "A";
moped[symbolWeight] = "250";
const mopedSymbols  = Object.getOwnPropertySymbols(moped);
LogMessage(`GetOwnPropertySymbols : ${mopedSymbols.length}`);
LogMessage(moped);
LogMessage();


// GetPrototypeOf
LogMessage('GetPrototypeOf Example');
LogMessage(`GetPrototypeOf harleyDavidson>motorcycle : ${Object.getPrototypeOf(harleyDavidson) === motorcycle}`);
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
let vehicle   = new Vehicle();
let car       = new Car();
let sportsCar = new SportsCar();
// vehicle   : Vehicle > Object
// car       : Car > Vehicle > Object
// sportsCar : SportsCar > Car > Vehicle > Object 
LogMessage(`Sports Car - Vehicle : ${SportsCar.prototype.isPrototypeOf(vehicle)}`);
LogMessage(`Car - Sports Car     : ${Car.prototype.isPrototypeOf(sportsCar)}`);
LogMessage(`Vehicle - Car        : ${Vehicle.prototype.isPrototypeOf(car)}`);
LogMessage();


// IsSealed
LogMessage('Sealed Example');
const sealedClass = { name : 'sealed' }
LogMessage(`Is Sealed                : ${Object.isSealed(sealedClass)}`);
Object.seal(sealedClass);
LogMessage(`Is Sealed - After Sealed : ${Object.isSealed(sealedClass)}`);
LogMessage();


// Keys
LogMessage('Keys Example');
LogMessage(`Keys motorcycle : ${Object.keys(motorcycle)}`);
LogMessage();


// PreventExtensions
LogMessage('PreventExtensions Example');
const racingBike = Object.create(motorcycle);
Object.preventExtensions(racingBike);
try {
    Object.defineProperty(racingBike, 'topSpeed', { value: 220 });
} catch (ex) {
    LogMessage(`PreventExtensions Exception : ${ex}`);     
}
LogMessage();


// PropertyIsEnumerable
LogMessage('PropertyIsEnumerable Example');
const motorcycleArray = ['Honda GSX-R'];
LogMessage(`PropertyIsEnumerable Motorcycle Owners : ${motorcycle.propertyIsEnumerable('wheels')}`);
LogMessage(`PropertyIsEnumerable Motorcycle Array  : ${motorcycleArray.propertyIsEnumerable(0)}`);
LogMessage(`PropertyIsEnumerable Motorcycle Array  : ${motorcycleArray.propertyIsEnumerable('length')}`);
LogMessage();


// Seal
LogMessage('Sealed Example');
try {
    delete sealedClass.name;
} catch (ex) {
    LogMessage(`Sealed Class : ${ex}`);
}
LogMessage();


// Object.setPrototypeOf
// Avoid Use Of SetPrototypeOf. Issues With Performance And Cascading Impact Of Prototype Object.
// Recommendation Is To Create A New Object With The Correct Prtototype.


// ToLocaleString
LogMessage('ToLocaleString Example');
const purchaseDate = new Date(Date.UTC(2024, 12, 20, 4, 0, 0));
const purchasePrice = 35000.55;
LogMessage(`Purchase Date  : ${purchaseDate.toLocaleString('en-US')}`);
LogMessage(`Purchase Price : ${purchasePrice.toLocaleString('en-US')}`);
LogMessage();


// Prototype.ToString
LogMessage('Prototype.ToString Example');
function Jet(name, year, cost) {
    this.name = name;
    this.year = year;
    this.cost = cost;
}
const jet = new Jet('Concorde', '2024', '5,000,000');
Jet.prototype.toString = function jetToString() { return `${this.year} ${this.name}`; };
LogMessage(`Prototype.ToString Jet : ${jet.toString()}`);
LogMessage();


// Prototype.ToString
LogMessage('Prototype.ToString Example');
Jet.prototype.valueOf = function ()  { return this.cost; };
LogMessage(`Prototype.ToString ValueOf : ${jet.valueOf()}`);
LogMessage();


// Values
LogMessage('Values Example');
LogMessage(`Values Jet : ${Object.values(jet)}`);
LogMessage();

