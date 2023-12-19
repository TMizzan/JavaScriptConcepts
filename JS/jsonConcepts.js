import { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();

let testJSON = '{ "employees" : [' +
               '{ "firstName" : "John",  "lastName" : "Doe" },' +
               '{ "firstName" : "Jane",  "lastName" : "Smith" },' +
               '{ "firstName" : "Jenny", "lastName" : "Wilson" } ]}';

const employeeJSON = JSON.parse(testJSON);

LogMessage(employeeJSON);