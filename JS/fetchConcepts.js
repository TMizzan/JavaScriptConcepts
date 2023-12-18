import { LogMessage } from './utils.js';

// fetch
async function GetJSON() {
    const response = await fetch("http://www.endpoint.com");
    const json = await response.json();
    LogMessage(json);
}
