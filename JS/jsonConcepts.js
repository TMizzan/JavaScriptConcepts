import { LogMessage } from './utils.js';

let testJSON = '{ "employees" : [' +
               '{ "firstName" : "John",  "lastName" : "Doe" },' +
               '{ "firstName" : "Jane",  "lastName" : "Smith" },' +
               '{ "firstName" : "Jenny", "lastName" : "Wilson" } ]}';

const employeeJSON = JSON.parse(testJSON);

LogMessage(employeeJSON);