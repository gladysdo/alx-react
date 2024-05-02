/ Define the accessImmutableObject function
export default function accessImmutableObject(object, array) {
    // Iterate over the elements in the array path
    let currentObject = object;
    for (let key of array) {
        // Check if the currentObject is undefined or null
        if (currentObject === undefined || currentObject === null) {
            return undefined; // Return undefined if the currentObject is not valid
        }
        // Check if the currentObject is a Map
        if (currentObject instanceof Map) {
            // Attempt to get the value from the Map
            currentObject = currentObject.get(key);
        } else {
            // Attempt to access the value from the object
            currentObject = currentObject[key];
        }
    }
    // Return the value of the object at the defined path
    return currentObject;
}
