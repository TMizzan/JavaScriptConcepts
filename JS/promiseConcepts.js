import { DisplayNodeJSInformation, GetRandomNumber, LogMessage } from './utils.js';


// Display NodeJS Information
DisplayNodeJSInformation();


// Promise (Resolve, Reject, Then, Catch, Finally)
LogMessage("Promise (Resolve, Reject, Then, Catch, Finally) Example");

let vehiclePurchasePromise = new Promise(function (resolve, reject) { 
    
    let min = 1;
    let max = 5;
    let purchaseDay = GetRandomNumber(min, max);

    if (purchaseDay >= max) {
        resolve(`Purchase Date (${purchaseDay}) On Or Later Than ${max}.`);
    } else {
        reject(`Purchase Date (${purchaseDay}) Earlier Than ${max}.`);
    }
});

vehiclePurchasePromise.
    then(
          function (successMessage) {
              LogMessage(`VehiclePurchasePromise - Success Message : ${successMessage}`);
          }, 
          function (rejectMessage) {
              LogMessage(`VehiclePurchasePromise - Reject Message : ${rejectMessage}`);
          }
        )
        .catch(function(errorMessage) {
            LogMessage(`VehiclePurchasePromise - Error Message   : ${errorMessage}`);
        })
        .finally(function() {
            LogMessage("VehiclePurchasePromise - Vehicle Purchase Date Confirmed.");
        });

LogMessage();


// Promise All
const vehicleMaintenancePromise = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 200, "[VehicleMaintenancePromise - Vehicle Maintenance Complete.]");
});
const vehicleRepairPromise = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 200, "[VehicleRepairPromise      - Vehicle Repair Complete.]");
});

Promise.all([vehicleMaintenancePromise, vehicleRepairPromise]).
  then((values) => {
    LogMessage();
    LogMessage("Promise All Example");
    LogMessage(`All Promises Complete`)
    values.forEach((value) => LogMessage(`All Promises Return Value : ${value}`));
    });


// Promise AllSettled
Promise.allSettled([vehicleMaintenancePromise, vehicleRepairPromise]).
  then((values) => {
    LogMessage();
    LogMessage("Promise All Settled Example");
    LogMessage(`All Settled Promises Complete.`)
    values.forEach((value) => LogMessage(`All Promises Settled Return : Status - ${value.status}, Value - ${value.value}`));
    });


// Promise Any
const vehicleRejectPromise = Promise.reject("Vehicle Out Of Service");
const vehicleFuelPromise = new Promise(function (resolve, reject) { 
    setTimeout(reject, 800, "[VehicleFuelPromise - Vehicle Fuel Fill Incomplete.]");
});

Promise.any([vehicleRejectPromise, vehicleFuelPromise]).
    then((values) => {
        LogMessage();
        LogMessage("Promise Any Example");
        LogMessage();
    })
    .catch((ex) => {
        LogMessage();
        LogMessage(`Promise Any Example - Error Message : ${ex}.`)
    });


// Promise Race
let vehicleRacePromise1 = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 800, "VehicleRacePromise1 - First Promise Complete.")
});

let vehicleRacePromise2 = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 200, "VehicleRacePromise2 - Second Promise Complete.")
});

Promise.race([vehicleRacePromise1, vehicleRacePromise2]).
    then((value) => { 
        LogMessage();
        LogMessage("Promise Race Example");
        LogMessage(`VehicleRacePromise - ${value}`);
    });

LogMessage();
