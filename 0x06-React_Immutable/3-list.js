// Import List from Immutable.js
import { List } from 'immutable';

// Function to convert array to an immutable List
export function getListObject(array) {
    // Convert the array to an immutable List
    const immutableList = List(array);
    return immutableList;
}

// Function to add an element to a List
export function addElementToList(list, element) {
    // Append the element to the list
    const updatedList = list.push(element);
    return updatedList;
}
