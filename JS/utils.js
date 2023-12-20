
// GetNodeJSVersion Function
function GetNodeJSVersion() {
    return process.version;
}

// CheckNodeVersion Function
function CheckNodeJSVersion(major, minor, build, revision = 0) {
    
    // Version Variables
    let majorValid    = true;
    let minorValid    = true;
    let buildValid    = true;
    let revisionValid = true;

    let nodeVersion      = GetNodeJSVersion();
    let nodeVersionArray = nodeVersion.split('.');
    
    // Major Number (Major Number Contains Letter 'v')
    if (nodeVersionArray.length >= 1) {
        if ((nodeVersionArray[0].replace('v', '')) < major) {
            majorValid = false;
        }
    }

    // Minor Number
    if ((majorValid) && 
        (nodeVersionArray.length >= 2)) {
        if (nodeVersionArray[1] < minor) {
            minorValid = false;
        }
    }

    // Build Number
    if ((majorValid && minorValid) && 
        (nodeVersionArray.length >= 3)) {
        if (nodeVersionArray[2] < build) {
            buildValid = false;
        }
    }

    // Revision Number (Optional)
    let nodeRevision = (nodeVersionArray.length >= 4) ? nodeVersionArray[3] : 0;
    if ((majorValid && minorValid && buildValid) &&
        (revision !== 0)) {
        if (nodeRevision < revision) {
            revisionValid = false;
        }
    }

    return Boolean((majorValid && minorValid && buildValid & revisionValid));
}


// LogMessage Function
function LogMessage(message = '') {
    console.log(message);
}


function DisplayNodeJSInformation(currentNodeVersion = "") {
 
    if (currentNodeVersion === "") {
        currentNodeVersion = CheckNodeJSVersion(20, 10, 0);
    }

    LogMessage(`NodeJS Version Is ${GetNodeJSVersion()}`);
    LogMessage();

    if (!currentNodeVersion) {
        LogMessage("NodeJS Version v20.10.0 Is Required To Run Some Examples");
        LogMessage();
    }
}

export { CheckNodeJSVersion, DisplayNodeJSInformation, GetNodeJSVersion, LogMessage };