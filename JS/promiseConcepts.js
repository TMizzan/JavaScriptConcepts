import { CheckNodeJSVersion, DisplayNodeJSInformation, GetRandomNumber, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();


// Promise
LogMessage("Promise Example");
LogMessage();

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
              LogMessage(`VehiclePurchasePromise - Reject Message  : ${rejectMessage}`);
          }
        )
        .catch(function(errorMessage) {
            LogMessage(`VehiclePurchasePromise - Error Message   : ${errorMessage}`);
        })
        .finally(() => {
            LogMessage("VehiclePurchasePromise - Vehicle Purchace Date Confirmed.");
        });

LogMessage();

// Promise Race
let vehicleRacePromise1 = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 500, "VehicleRacePromise1 - First Promise Complete.")
});

let vehicleRacePromise2 = new Promise(function (resolve, reject) { 
    setTimeout(resolve, 100, "VehicleRacePromise1 - Second  Promise Complete.")
});

Promise.race([vehicleRacePromise1], [vehicleRacePromise2]).
    then((value) => { 
        LogMessage();
        LogMessage("Promise Race Example");
        LogMessage();
        LogMessage(`VehicleRacePromise - ${value}`);
    });

LogMessage();