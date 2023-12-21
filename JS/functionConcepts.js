import { DisplayNodeJSInformation, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();

class Truck {
    year  = '2025';
    model = 'Freighliner'
 }

class Vehicle {
    year  = '2024';
    model = 'Audi';
    getDescription() {
        return `${this.year} ${this.model}`;
    }
}

// HasInstance
LogMessage('HasInstance Example');
const vehicle = new Vehicle();
LogMessage(`Has Instance : ${vehicle instanceof Vehicle === Vehicle[Symbol.hasInstance](vehicle)}`);
LogMessage();


// Apply 
// Can Pass Arguments Array
LogMessage('Apply Example');
const truck = new Truck();
let description = vehicle.getDescription.apply(truck);
LogMessage(`Apply Truck Description : ${description}`);
LogMessage();


// Bind
// Creates A Copy Of A Function
LogMessage('Bind Example');
const vehicleDescription = vehicle.getDescription;
const boundDescription = vehicleDescription.bind(truck);
LogMessage(`Bound Truck Description : ${boundDescription()}`);
LogMessage();


// Call
// Can Pass Argment List
LogMessage('Call Example');
LogMessage(`Call Truck Description  : ${vehicle.getDescription.call(truck)}`);
LogMessage();


// ToString 
LogMessage('ToString Example');
LogMessage(`ToString : ${vehicle.getDescription.toString()}`);
LogMessage();

