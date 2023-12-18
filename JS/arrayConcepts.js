import { LogMessage } from './utils.js';


const emptyArray = [];
const elementArray = new Array (2); 
const carArray = ["Alpha Romeo", "BMW", "Cadillac", "GMC", "Ford", "Mercedes", "Nissan", "Volvo"];


LogMessage(`Empty Array Length   : ${emptyArray.length}`);
LogMessage(`Element Array Length : ${elementArray.length}`);
LogMessage(`Sample Array Length  : ${carArray.length}`);
LogMessage('');


// Iterator
LogMessage('Iterator Example');
const carIterator = carArray[Symbol.iterator]();
for (const car of carIterator) {
    LogMessage(`Iterator : ${car}`);
}
LogMessage('');


// At
LogMessage('At Example');
LogMessage(`At : ${carArray.at(2)}`);
LogMessage('');


// Concat
// Does Not Change Existing Arrays, Returns New Array
LogMessage('Concat Example');
const newCarArray = carArray.concat(["Hyundai", "Mazda"]);
LogMessage(`Concat :  ${newCarArray}`);
LogMessage('');


// CopyWithin
LogMessage('CopyWithin Example');
let copyToArray = [...carArray];
copyToArray.copyWithin(0, 5, 6);
LogMessage(`CopyWithin : ${copyToArray}`);
LogMessage('');


// Entries
LogMessage('Entries Example');
const entryIterator = carArray.entries();
LogMessage(`Entries (First Iterator Value)  : ${entryIterator.next().value}`);
LogMessage(`Entries (Second Iterator Value) : ${entryIterator.next().value}`);
LogMessage(`Entries (Third Iterator Value)  : ${entryIterator.next().value}`);
LogMessage('');


// Every
// Changes Existing Array
LogMessage('Every Example');
const nameCheck = (currentValue) => currentValue.length > 3;
LogMessage(`Every : ${carArray.every(nameCheck)}`);
LogMessage('');


// Fill
LogMessage('Fill Example');
let fillArray = [...carArray];
LogMessage(`Fill : ${fillArray.fill("Unknown", 2, 4)}`);
LogMessage(`Car  : ${carArray}`);
LogMessage('');


// Filter
LogMessage('Filter Example');
const filterArray = carArray.filter((name) => name.length > 3);
LogMessage(`Filtered : ${filterArray}`);
LogMessage('');


// Find
LogMessage('Find Example');
const found = carArray.find((car) => car === "GMC");
const notFound = carArray.find((car) => car === "Porche");
LogMessage(`Found Car : ${found}`);
LogMessage(`Found : ${notFound}`);
LogMessage('');


// Find Index
LogMessage('Find Index Example');
const foundIndex = carArray.findIndex((car) => car === "GMC");
LogMessage(`Find Index : ${foundIndex}`);
LogMessage('');


// Find Last
// Traverses From End Of Array
LogMessage('Find Last Example');
const lastCarArray = carArray.concat(["Hyundai", "Mazda", "Mazda"]);
const lastFound = lastCarArray.findLast((car) => car === "Mazda");
LogMessage(`Find Last : ${lastFound}`);
LogMessage('');


// Find Last Index
// Traverses From End Of Array
LogMessage('Find Last Index Example');
const lastFoundIndex = lastCarArray.findLastIndex((car) => car === "Mazda");
LogMessage(`Find Last Index : ${lastFoundIndex}`);
LogMessage('');


// Flat
LogMessage('Flat Example');
const nestArray1 = [0, 1, 2, 3, [4, 5]];
const nestArray2 = [0, 1, 2, [3, 4, [5, 6]]];
const sparseArray1 = [0, 1, 2, , 4, 5];
const sparseArray2 = [0, 1, [2, , [4, 5, , 7]]];
LogMessage(`Flat Array1   : ${nestArray1.flat()}`);
LogMessage(`Flat Array2   : ${nestArray2.flat()}`);
LogMessage(`Sparse Array1 : ${sparseArray1.flat()}`);
LogMessage(`Sparse Array2 : ${sparseArray2.flat(2)}`);
LogMessage('');


// Flat Map
LogMessage('Flat Map Example');
LogMessage(`Flat Map : ${carArray.flatMap((car) => (car === "GMC" ? "GMC2" : car))}`);
LogMessage('');


// For Each
LogMessage('For Each Example');
carArray.forEach((car) => LogMessage(`Car : ${car}`));
LogMessage('');


// From
LogMessage('From Example');
LogMessage(`${Array.from(carArray, (car) => car + ' - New')}`);
LogMessage('');


// Array From Async
// Array.fromAsync(new Map([
//                         [1, 2], 
//                         [3,4],
//                     ]),
//                     ).then((array) => LogMessage(`Array From Async : ${array}`));


// Includes
LogMessage('Includes Example');
LogMessage(`Includes Mercedes : ${carArray.includes("Mercedes")}`);
LogMessage('');


// Index Of
LogMessage('Index Of Example');
LogMessage(`Index Of Mercedes : ${carArray.indexOf("Mercedes")}`);
LogMessage('');


// IsArray
LogMessage('IsArray Example');
LogMessage(`IsArray : ${Array.isArray(carArray)}`);
LogMessage('');


// Join
LogMessage('Join Example');
LogMessage(`Join : ${carArray.join('/')}`);
LogMessage('');


// Keys
LogMessage('Keys Example');
const carKeyIterator = carArray.keys();
for (const key of carKeyIterator) {
    LogMessage(`Car Iterator Key : ${key}`);
}
LogMessage('');


// LastIndexOf
LogMessage('LastIndexOf Example');
LogMessage(`Last Index Of : ${lastCarArray.lastIndexOf("Mazda")}`);
LogMessage('');


// Map
LogMessage('Map Example');
LogMessage(`Map : ${carArray.map((car) => car + " - New")}`);
LogMessage('');


// Of 
LogMessage('Of Example');
LogMessage(`Array Of ${Array.of("Diesel", "Electric", "Gas")}`);
LogMessage('');


// Pop
LogMessage('Pop Example');
let popArray = [...carArray];
LogMessage(`Pop : ${popArray.pop()}`);
LogMessage('');


// Push
LogMessage('Push Example');
let pushArray = [...carArray];
LogMessage(`Push : ${pushArray.push("Buick")}`);
LogMessage('');


//  Reduce 
LogMessage('Reduce Example');
let reduceArray = ["2", "4", "6", "8", "10"];
let reduce = reduceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
LogMessage(`Reduce : ${reduce}`);
LogMessage('');


// Reduce Right
LogMessage('Reduce Right Example');
let reduceRight = reduceArray.reduceRight((accumulator, currentValue) => accumulator + currentValue);
LogMessage(`Reduce Right : ${reduceRight}`);
LogMessage('');


// Reverse 
LogMessage('Reverse Example');
let reverseArray = [...carArray];
LogMessage(`Reverse : ${reverseArray.reverse()}`);
LogMessage('');


// Shift 
LogMessage('Shift Example');
let shiftArray = [...carArray];
LogMessage(`Shift : ${shiftArray.shift()}`);
LogMessage('');


// Slice
// Returns Shallow Copy, Original Array Is Not Modified
LogMessage('Slice Example');
LogMessage(`Slice : ${carArray.slice(2, 4)}`);
LogMessage('');


// Some 
LogMessage('Some Example');
LogMessage(`Some : ${carArray.some((car) => car === "GMC")}`);
LogMessage('');


// Sort 
// Mutates Original Array
LogMessage('Sort Example');
let sortArray = ["Truck", "Car", "Motorcycle", "Bus", "Train", "Moped", "Semi-Truck", "Van"];
LogMessage(`Sorted : ${sortArray.sort()}`);
LogMessage('');


// Splice
LogMessage('Splice Example');
let spliceArray = [...carArray];
spliceArray.splice(1, 0, "Toyota");
LogMessage(`Splice : ${spliceArray}`);
LogMessage('');


// ToLocaleString
LogMessage('ToLocaleString Example');
const dateArray = [1, "31 Dec 2024 12:20:00 UTC"];
LogMessage(`ToLocaleString : ${dateArray.toLocaleString('en', { timeZone: "UTC" })}`);
LogMessage('');

