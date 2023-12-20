import { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage } from './utils.js';

// Display NodeJS Information
DisplayNodeJSInformation();

let testJSON = '{ "employees" : [' +
               '{ "firstName" : "John",  "lastName" : "Doe" },' +
               '{ "firstName" : "Jane",  "lastName" : "Smith" },' +
               '{ "firstName" : "Jenny", "lastName" : "Wilson" } ]}';


// JSON
LogMessage("JSON Example");
const employeeJSON = JSON.parse(testJSON);
LogMessage(`Employee One Name   : ${employeeJSON.employees[0].firstName} ${employeeJSON.employees[0].lastName}`);
LogMessage(`Employee Two Name   : ${employeeJSON.employees[1].firstName} ${employeeJSON.employees[0].lastName}`);
LogMessage(`Employee Third Name : ${employeeJSON.employees[2].firstName} ${employeeJSON.employees[0].lastName}`);
LogMessage();

// ToString
LogMessage("ToString Example")
const testString = JSON.stringify(employeeJSON, null, '\t');
LogMessage(`Empoloyee JSON String   : ${testString}`);
LogMessage();