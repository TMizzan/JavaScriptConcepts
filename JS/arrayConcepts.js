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
    LogMessage(car);
}
LogMessage('');


// At
LogMessage('At Example');
LogMessage(`Second Car : ${carArray.at(2)}`);
LogMessage('');


// Concat
// Does Not Change Existing Arrays, Returns New Array
LogMessage('Concat Example');
const newCarArray = carArray.concat(["Hyundai", "Mazda"]);
LogMessage(`New Car Array :  ${newCarArray}`);
LogMessage('');


// CopyWithin
LogMessage('CopyWithin Example');
let copyToArray = [...carArray];
copyToArray.copyWithin(0, 5, 6);
LogMessage(`CopyTo Array : ${copyToArray}`);
LogMessage('');


// Entries
LogMessage('Entries Example');
const entryIterator = carArray.entries();
LogMessage(`First Iterator Value  : ${entryIterator.next().value}`);
LogMessage(`Second Iterator Value : ${entryIterator.next().value}`);
LogMessage(`Third Iterator Value  : ${entryIterator.next().value}`);
LogMessage('');


// Every
// Changes Existing Array
LogMessage('Every Example');
const nameCheck = (currentValue) => currentValue.length > 3;
LogMessage(`Car Name Check : ${carArray.every(nameCheck)}`);
LogMessage('');


// Fill
LogMessage('Fill Example');
let fillArray = [...carArray];
LogMessage(`Fill Car Array       : ${fillArray.fill("Unknown", 2, 4)}`);
LogMessage(`Car Array Unmodified : ${carArray}`);
LogMessage('');


// Filter
LogMessage('Filter Example');
const filterArray = carArray.filter((name) => name.length > 3);
LogMessage(`Filtered Array : ${filterArray}`);
LogMessage('');


// Find
LogMessage('Find Example');
const found = carArray.find((car) => car === "GMC");
const notFound = carArray.find((car) => car === "Porche");
LogMessage(`Found Car : ${found}`);
LogMessage(`Not Found Car : ${notFound}`);
LogMessage('');


// Find Index
LogMessage('Find Index Example');
const foundIndex = carArray.findIndex((car) => car === "GMC");
LogMessage(`Found Index Car : ${foundIndex}`);
LogMessage('');


// Find Last
// Traverses From End Of Array
LogMessage('Find Last Example');
const lastCarArray = carArray.concat(["Hyundai", "Mazda", "Mazda"]);
const lastFound = lastCarArray.findLast((car) => car === "Mazda");
LogMessage(`Last Found : ${lastFound}`);
LogMessage('');


// Find Last Index
// Traverses From End Of Array
LogMessage('Find Last Index Example');
const lastFoundIndex = lastCarArray.findLastIndex((car) => car === "Mazda");
LogMessage(`Last Found Index : ${lastFoundIndex}`);
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
LogMessage(`Car Array : ${Array.isArray(carArray)}`);
LogMessage('');


// Join
LogMessage('Join Example');
LogMessage(`Car Array Join : ${carArray.join('/')}`);
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
LogMessage(`Pop Element : ${popArray.pop()}`);
LogMessage('');


// Push
LogMessage('Push Example');
let pushArray = [...carArray];
LogMessage(`Push Array : ${pushArray.push("Buick")}`);
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
LogMessage(`Reverse Car Array : ${reverseArray.reverse()}`);
LogMessage('');



// 
//LogMessage(' Example');
//LogMessage(`${}`);
//LogMessage('');
