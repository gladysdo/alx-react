// Import Immutable.js library
const { fromJS } = require('immutable');

// Define the getImmutableObject function
function getImmutableObject(object) {
    // Convert the object into an immutable Map
    const immutableMap = fromJS(object);
    return immutableMap;
}

// Export the getImmutableObject function
module.exports = getImmutableObject;
