import { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();


// Promise
LogMessage("Promise Example");
LogMessage();

let vehiclePurchasePromise = new Promise(function (resolve, reject) { 
    
    let min = 1;
    let max = 5;
    let purchaseDay = Math.floor((Math.random() * (max - min + 1) + min));

    if (purchaseDay >= 5) {
        resolve(`The Purchase Date (${purchaseDay}) On Or Later Than 5.`);
    } else {
        reject(`The Purchase Date (${purchaseDay}) Earlier Than 5.`);
    }
    
});


vehiclePurchasePromise.
    then(
        function (successMessage) {
            LogMessage(`Success Message : ${successMessage}`);
        }, 
        function (rejectMessage) {
            LogMessage(`Reject Message  : ${rejectMessage}`);
        })
        .catch(function(errorMessage) {
            LogMessage(`Error Message   : ${errorMessage}`);
        });

