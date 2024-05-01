// Import the Map class from Immutable.js
const { Map } = require('immutable');

// Define the getImmutableObject function
function getImmutableObject(object) {
    // Convert the object into an immutable Map
    const immutableMap = Map(object);
    return immutableMap;
}

// Export the getImmutableObject function
module.exports = getImmutableObject;
