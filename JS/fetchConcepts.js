import { DisplayNodeJSInformation, LogMessage } from './utils.js';


// Display NodeJS Information
DisplayNodeJSInformation();


// Fetch, Request, Response (Async)
LogMessage("Fetch, Request, Response Example");

// JSON Test Website (GMT Time)
let request = new Request('http://date.jsontest.com', { method : "GET"});

async function GetDateTime() {
    let json = '';
    const response = await fetch(request);
    if (response.ok) {
        json = await response.json();
    } else {
        LogMessage("GetDateTime Exception Occurred.");
    }
    return json;
};

GetDateTime().then((dateTimeJSON) => {`GetDateTime Success : ${LogMessage((dateTimeJSON !== '') ? 
                                                               JSON.stringify(dateTimeJSON, null, '\t') : 
                                                               dateTimeJSON)}`},
                    (error) => {`GetDateTime Error  : ${error}`});


