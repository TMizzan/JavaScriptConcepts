import { DisplayNodeJSInformation, LogMessage } from './utils.js';


// Display NodeJS Information
DisplayNodeJSInformation();


class Truck {
    year  = '2025';
    model = 'Freightliner'
 }

class Vehicle {
    year  = '2024';
    model = 'Audi';
    getDescription() {
        return `${this.year} ${this.model}`;
    }
    getDriverInformation(firstName, lastName) {
        return `Driver : ${firstName} ${lastName}, Year : ${this.year}, Model : ${this.model}`;
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
let driver = vehicle.getDriverInformation.apply(truck, ["John", "Doe"]);
LogMessage(`Apply Truck Driver : ${driver}`);
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
LogMessage(`Call Truck Driver  : ${vehicle.getDriverInformation.call(truck, "John", "Doe")}`);
LogMessage();


// ToString 
LogMessage('ToString Example');
LogMessage(`ToString : ${vehicle.getDescription.toString()}`);
LogMessage();
